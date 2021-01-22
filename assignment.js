// https://github.com/al-shahariarjunaid/assignment-3
    
    //Solution-1 (It's about convert kilometerToMeter.)

function kilometerToMeter(kilometer){
        var meter = 0;
    if (kilometer < 0){
        return "Wrong Input";
    }
    else{
        return meter = kilometer * 1000;
    }
    return meter;
}
var result = kilometerToMeter(7);
//console.log(result);

        //Solution-2 (It's about budgetCalculator.)

function budgetCalculator(Watches, Phones, Laptops){
    var total = 0;
    var firstItem = Watches * 50;
    var secondItem = Phones * 100;
    var thirdItem = Laptops * 500;
    return total = firstItem + secondItem + thirdItem;
}
var result = budgetCalculator(3, 2, 2);
//console.log(result);


        //Solution-3 (It's about hotelCost.)

function hotelCost(days){
    var totalCost = 0;

    if(days <= 10){
        totalCost = days * 100;
    }

    else if(days <= 20){
        var firstPackage = 10 * 100;
        var remainingDays = days - 10;
        var secondPackage = remainingDays * 80;
        totalCost = firstPackage + secondPackage;
    }

    else{
        var firstPackage = 10 * 100;
        var secondPackage = 10 * 80;
        var remainingDays = days - 20;
        var thirdPackage = remainingDays * 50;
        totalCost = firstPackage + secondPackage + thirdPackage;
    }
    return totalCost;
}
var result = hotelCost(28);
//console.log(result);

        //Solution-4 (It's about megaFriend.)

function megaFriend(friends){
    var bigName = friends[0];
    for (var i = 0; i <friends.length; i++){
        var name = friends[i];
        if ( name.length > bigName.length){
            bigName = name;
        }
    }
    return bigName;
}
var friends = ["Sakib", "Jamiluddin", "Rifat", "Armaan", "Sajjad", "Eishan"];
var megaName = megaFriend(friends);
//console.log(megaName);