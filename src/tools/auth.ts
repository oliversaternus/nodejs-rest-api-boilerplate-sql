import { Request, Response } from "express";

export function verifyAdmin(token: string) {
    return "";
}

export function autoVerifyAdmin(input: (req: Request, res: Response, adminName: string) => Promise<void>):
    (req: Request, res: Response) => Promise<void> {
    return async (req: Request, res: Response) => {
        const admin: string = verifyAdmin(req.get("token"));
        if (!admin) {
            res.sendStatus(401);
            return;
        }
        await input(req, res, admin);
    };
}
