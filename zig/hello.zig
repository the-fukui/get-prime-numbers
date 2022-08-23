const std = @import("std");
const ArrayList = std.ArrayList;
const stdout = std.io.getStdOut().writer();
const allocator = std.heap.page_allocator;

pub fn main() !void {
    try stdout.print("Hello, {s}!\n", .{"world"});

    getPrimeNumbers(50);
}

pub fn getPrimeNumbers(maximum: i32 ) void{
    var list = ArrayList(i32).init(allocator);
    // list.orderedRemove(0); // 1を除外

    try stdout.print(list, maximum);

    // for(list) |num,index|{
    //     if(list[num]){ break; }

    //     // list = list
    //     try stdout.print(list, num, index, maximum);
    // }
}