export interface ITodoState {
    data: ITodo[];
}

export interface ITodo {
    id: number
    title: string,
    status: "active" | "completed" | "deleted"
}

export enum ETodoStatus {
    active = "active",
    completed = "completed",
    deleted = "deleted"
}