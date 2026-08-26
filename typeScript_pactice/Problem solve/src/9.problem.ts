interface UDaction {
    type: "upload"|"delete",
    sizeMB: number
}

function updateStorageUsage(currentUsageMB: number, action: UDaction): number {
 if(action.type==="delete"){
    if(currentUsageMB<action.sizeMB){
        return 0
    }
    return currentUsageMB-action.sizeMB
 }return currentUsageMB+action.sizeMB
}
console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));

