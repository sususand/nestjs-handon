export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
export enum TaskStatus {
    OPNE = "OPNE",
    IN_PORGRESS = "IN_PROGRESS",
    DONE = "DONE"

}