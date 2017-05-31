export class LeaveStructureModel {
    id: number;
    leaveStructureName: string;
    maxLeaveCount: string;
    isCarryForward: boolean;
    status: boolean;
    isAllowLeave: boolean;
    isDefault: boolean;
    department: string[];
    departmentIds: string[];
    leaveTypeIds: string[];
}