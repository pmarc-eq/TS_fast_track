interface Dimensions {
    length: number
    width: number
    height: number
}

type Sender = number | string

enum PackageStatus {
    Pending = "Pending",
    InTransit = "InTransit",
    Delivered = "Delivered",
    Lost = "Lost"
}

interface Parcel {
    readonly id: number
    weight: number
    dimensions: Dimensions
    description?: string
    sender: Sender
    status: PackageStatus
    deliver: (isSuccess: boolean) => void
    get statusName(): string
}

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {length: 105, width: 44, height: 50.5},
    sender: "Vlad Tymo", 
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) { this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost },
    get statusName() { return PackageStatus[this.status]} 
}

item.deliver(true);
console.log(item.statusName); 