import { Session } from "next-auth";

export type ProfileProps = {
    name?: string;
    desc?: string;
    data: Session | null | undefined;
}