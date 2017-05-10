export class EmployeeLeaveModel {
    id: number;
    employeeId: number;
    fromDate: Date;
    toDate: Date;
    leaveReason: string;
    leaveTypeId: number;
    status: string;
    createDate: Date;
    isHalfDay: Boolean;
}