
export type UserRole = "USER" | "ADMIN" | "MERCHANT" ;
export type TransactionStatus = "SUCCESS" | "FAILED" | "PENDING" ;
export type RewardType = "CASHBACK" | "POINTS_MULTIPLIER" | "DISCOUNT" ;

export  type User = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
};

export type Wallet = {
    id: string;
    userId: string;
    balance: number;
    points: number;
    currency: string;
};

export type Transaction = {
    id: string;
    userId: string;
    merchantId: string;
    merchantName: string;
    amount: number;
    pointsUsed: number;
    status: TransactionStatus;
    createdAt: string;
};

export type Campaign = {
    id: string;
    merchantId: string;
    title: string;
    description: string;
    rewardType: RewardType;
    variant: "A" | "B";
    active: boolean;
};
