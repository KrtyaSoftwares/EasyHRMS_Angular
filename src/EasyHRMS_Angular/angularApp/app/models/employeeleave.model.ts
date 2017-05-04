export class EmployeeLeaveModel {
    employeeLeaveId: number;
    employeeId: number;
    fromDate: Date;
    toDate: Date;
    LeaveReason: string;
    LeaveTypeId: number;
    status: string;
    CreateDate: Date;
    IsHalfDay: Boolean;
}