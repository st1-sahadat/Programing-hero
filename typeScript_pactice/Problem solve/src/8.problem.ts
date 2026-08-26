interface LikeNotification{
     type: string
     fromUser: string
}
interface SystemNotification{
    type: string 
    message: string 
    actionUrl?: string 
}



function renderNotification(notification: LikeNotification | SystemNotification): string {
    if ("fromUser" in notification) {
        return `${notification.fromUser} liked your post.`;
    }return notification.actionUrl ? `${notification.type} : ${notification.message} (${notification.actionUrl})`:`${notification.type} : ${notification.message}`
    }

console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
