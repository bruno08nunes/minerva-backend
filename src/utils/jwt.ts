import jwt from 'jsonwebtoken';
import { env } from '../env';

type JwtPayload = object;

/**
 * Assina um JWT com tempo de expiração e chave especificados.
 */
export const signJwt = (
    payload: JwtPayload,
    expiresIn: string = '1d',
    secret: string = env.JWT_SECRET
) => {
    secret = secret === "refresh" ? env.JWT_REFRESH_SECRET : secret;
    try {
        return jwt.sign(payload, secret, { expiresIn: expiresIn as jwt.SignOptions['expiresIn'] });
    } catch (error) {
        console.error('JWT signing failed:', error);
        return null;
    }
};

/**
 * Verifica um JWT com a chave especificada.
 */
export const verifyJwt = (token: string, secret: string = env.JWT_SECRET) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
};