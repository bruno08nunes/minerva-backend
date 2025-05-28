import type {
    JestEnvironmentConfig,
    EnvironmentContext,
} from "@jest/environment";
import { exec } from "node:child_process";
import dotenv from "dotenv";
import NodeEnvironment from "jest-environment-node";
import mysql from "mysql2/promise";
import util from "node:util";
import crypto from "node:crypto";

dotenv.config({ path: ".env.testing" });

const execSync = util.promisify(exec);
const prismaBinary = "./node_modules/.bin/prisma";

export default class PrismaTestEnvironment extends NodeEnvironment {
    private databaseName: string;
    private connectionString: string;

    constructor(config: JestEnvironmentConfig, _context: EnvironmentContext) {
        super(config, _context);

        const dbUser = process.env.DATABASE_USER;
        const dbPass = process.env.DATABASE_PASS;
        const dbHost = process.env.DATABASE_HOST;
        const dbPort = process.env.DATABASE_PORT;

        this.databaseName = `test_${crypto.randomUUID().replace(/-/g, "")}`;
        this.connectionString = `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${this.databaseName}`;
    }

    async setup() {
        const rootConnection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            port: Number(process.env.DATABASE_PORT),
        });

        await rootConnection.query(`CREATE DATABASE \`${this.databaseName}\``);
        await rootConnection.end();

        process.env.DATABASE_URL = this.connectionString;
        this.global.process.env.DATABASE_URL = this.connectionString;

        await execSync(`npx prisma migrate deploy`);

        return super.setup();
    }

    async teardown() {
        const rootConnection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            port: Number(process.env.DATABASE_PORT),
        });

        await rootConnection.query(
            `DROP DATABASE IF EXISTS \`${this.databaseName}\``
        );
        await rootConnection.end();
    }
}
