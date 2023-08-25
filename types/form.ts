
export type FormProps = {
    type: "Register" | "Login";
    userName?: string;
    setUserName?: (name: string) => void;
    email: string;
    setEmail: (password: string) => void;
    password: string;
    setPassword: (password: string) => void;
    submitting: boolean,
    handleSubmit: (e: any) => void;
}

export type ReportFormProps = {
    type: "Create" | "Edit";
    reportDate: ReportDate;
    setReportDate: (date: { from: string | null, to: string | null }) => void;
    report: string;
    setReport: (date: string) => void;
    challengesFaced: string;
    setChallengesFaced: (date: string) => void;
    submitting: boolean,
    handleSubmit: (e: any) => void;
}

export type ReportDate = {
    from: string | null;
    to: string | null;
}
