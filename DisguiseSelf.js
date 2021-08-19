$(document).ready(function(){

// Races

    const AllRaces = [];
    var NewRace;

// Race Exclusions

    const Elves = [];
    const HalfElves = [];
    const Orcs = [];
    const Genasi = ['Fire Genasi', 'Water Genasi', 'Air Genasi', 'Earth Genasi'];
    var Wings = true;
    var Tails = true;
    var ManualSelection = false;

// Genders

    const Genders = ['Male', 'Female', 'Male', 'Female', 'Male', 'Female', 'Indeterminiate'];

// Ages

    const Ages = ['Young', 'Teen', 'Adult', 'Middle-Aged', 'Teen', 'Adult', 'Middle-Aged', 'Teen', 'Adult', 'Middle-Aged', 'Old', 'Elderly'];

// Exclude Wings and Tails

function toggle(x){
    return !x
}

function NoWings(){
    Wings = toggle(Wings);
    if(Wings == true){
        $("#ExcludeWings").html('Exclude races with wings');
    } else {
        $("#ExcludeWings").html('Include races with wings');
    }
}

function NoTails(){
    Tails = toggle(Tails);
    if(Tails == true){
        $("#ExcludeTails").html('Exclude races with tails');
    } else {
        $("#ExcludeTails").html('Include races with tails');
    }
}

$("#ExcludeWings").click(NoWings);
$("#ExcludeTails").click(NoTails);

// Manual Race Selection

function ManualRaces(){
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked == true) {
            var NewRace = document.getElementById.value;
            if(NewRace == 'Elf'){
                AllRaces.push('AnyElf');
                Elves.push('Wood Elf', 'High Elf', 'Wood Elf', 'High Elf', 'Wood Elf', 'High Elf', 'Pallid Elf', 'Sea Elf', 'Shadar-kai Elf', 'Eladrin');
            } else if(NewRace == 'Half Elf'){
                AllRaces.push('Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Pallid Elf', 'Half Sea Elf', 'Half Shadar-kai Elf', 'Half Eladrin');
            } else if(NewRace == 'Orc'){
                AllRaces.push('Orc', 'Eberron Orc');
            } else {
                AllRaces.push(NewRace);
            }
        } else if(inputs[i].checked == false) {
            var NewRace = document.getElementById.value;
            if(NewRace == 'ExcludeDrow'){
                AllRaces.push('Drow');
                Elves.push('Drow');
            } else if(NewRace == 'ExcludeHalfDrow'){
                AllRaces.push('Half Drow');
                Elves.push('Half Drow');
        }
    };
}
}

function DisguiseMe(){
// Create Race Array
    
    // const AllRaces = ["Aarokocra", "Aasimar", "Bugbear", "Dragonborn", "Dwarf", "Elf", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Grung", "HalfElf", "HalfOrc", "Halfling", "Hobgoblin", "Human", "Kalashtar", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Owlfolk", "Rabbitfolk", "Satyr", "SimicHybrid", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalken", "Verdan", "Warforged", "Yuan-ti"];

// Calculate Height
    var FeetInches = document.getElementById("HeightFeet").value;
    var FeetInches = FeetInches * 12;
    var Inches = document.getElementById("HeightInches").value;
    var HeightInches = parseFloat(FeetInches) + parseFloat(Inches);

// Calculate min-max height

    var MinHeight = parseFloat(HeightInches) - 12;
    var MaxHeight = parseFloat(HeightInches) + 12;

// Build heights of races, Exclude min/max height
    
    // Aarokocra

    var AarokocraMin = 48;
    var AarokocraMax = 60;
    if(Wings == true){
        if(MaxHeight <= AarokocraMin || MinHeight >= AarokocraMax){
            var ExcludeAarokocra = true;
        } else {
            var ExcludeAarokocra = false;
            AllRaces.push("Aarokocra");
        }
    }

    // Aasimar
    var AasimarMin = 60;
    var AasimarMax = 78;
    if(MaxHeight <= AasimarMin || MinHeight >= AasimarMax){
        var ExcludeAasimar = true;
    } else {
        var ExcludeAasimar = false;
        AllRaces.push('Aasimar');
    }

    // Bugbear
    var BugbearMin = 72;
    var BugbearMax = 96;
    if(MaxHeight <= BugbearMin || MinHeight >= BugbearMax){
        var ExcludeBugbear = true;
    } else {
        var ExcludeBugbear = false;
        AllRaces.push('Bugbear');
    }

    // Dragonborn
    var DragonbornMin = 72;
    var DragonbornMax = 84;
    if(MaxHeight <= DragonbornMin || MinHeight >= DragonbornMax){
        var ExcludeDragonborn = true;
    } else {
        var ExcludeDragonborn = true;
        AllRaces.push('Dragonborn');
    }

    // Dwarf
    var DwarfMin = 46;
    var DwarfMax = 56;
    if(MaxHeight <= DwarfMin || MinHeight >= DwarfMax){
        var ExcludeDwarf = true;
    } else {
        var ExcludeDwarf = false;
        AllRaces.push('Dwarf');
    }

    // Elf
    var ElfMin = 56;
    var ElfMax = 74;
    if(MaxHeight < ElfMin || MinHeight > ElfMax){
        var ExcludeElf = true;
    } else {
        var ExcludeElf = false;
        Elves.push('Wood Elf', 'High Elf', 'Wood Elf', 'High Elf', 'Wood Elf', 'High Elf', 'Pallid Elf', 'Sea Elf', 'Shadar-kai Elf');
    }

    // Elf Subrace Eladrin

    var EladrinMin = 65;
    var EladrinMax = 73;
    if(MaxHeight < EladrinMin || MinHeight > EladrinMax){
        var ExcludeEladrin = true;
    } else {
        var ExcludeEladrin = false;
        Elves.push('Eladrin', 'Eladrin');
    }

    // Elf Subrace Drow

    var DrowMin = 55;
    var DrowMax = 65;
    if(MaxHeight < DrowMin || MinHeight > DrowMax){
        var ExcludeDrow = true;
    } else {
        var ExcludeDrow = false;
        Elves.push('Drow');
    }

    // Test for any elf

    if(ExcludeElf == false && ExcludeEladrin == false && ExcludeDrow == false) {
        var AnyElf = true;
        AllRaces.push('Any Elf');
    } else if(ExcludeElf == false || ExcludeEladrin == false || ExcludeDrow == false) {
        if(ExcludeElf == false) {
            AllRaces.push('Wood Elf', 'High Elf', 'Wood Elf', 'High Elf', 'Wood Elf', 'High Elf', 'Pallid Elf', 'Sea Elf', 'Shadar-kai Elf');
        }
        if(ExcludeDrow == false) {
            AllRaces.push('Drow');
        }
        if(ExcludeEladrin == false) {
            AllRaces.push('Eladrin');
        }
    } else {
        var AnyElf = false;
    }

    // Firbolg

    var FirbolgMin = 84;
    var FirbolgMax = 96;
    if(MaxHeight < FirbolgMin || MinHeight > FirbolgMax){
        var ExcludeFirbolg = true;
    } else {
        var ExcludeFirbolg = false;
        AllRaces.push('Firbolg');
    }

    // Genasi

    var GenasiMin = 60;
    var GenasiMax = 78;
    if(MaxHeight < GenasiMin || MinHeight > GenasiMin){
        var ExcludeGenasi = true;
    } else {
        var ExcludeGenasi = false;
        AllRaces.push('Genasi');
    }

    // Gith

    var GithMin = 61;
    var GithMax = 72;
    if(MaxHeight < GithMin || MinHeight > GithMax){
        var ExcludeGith = true;
    } else {
        var ExcludeGith = false;
        AllRaces.push('Gith');
    }

    // Gnome

    var GnomeMin = 36;
    var GnomeMax = 48;
    if(MaxHeight < GnomeMin || MinHeight > GnomeMax){
        var ExcludeGnome = true;
    } else {
        var ExcludeGnome = false;
        AllRaces.push('Gnome');
    }

    // Goblin

    var GoblinMin = 36;
    var GoblinMax = 48;
    if(MaxHeight < GoblinMin || MinHeight > GoblinMax){
        var ExcludeGoblin = true;
    } else {
        var ExcludeGoblin = false;
        AllRaces.push('Goblin');
    }

    // Goliath

    var GoliathMin = 84;
    var GoliathMax = 96;
    if(MaxHeight < GoliathMin || MinHeight > GoliathMax){
        var ExcludeGoliath = true;
    } else {
        var ExcludeGoliath = false;
        AllRaces.push('Goliath');
    }

    // Half Elf

    var HalfElfMin = 55;
    var HalfElfMax = 75;
    if(MaxHeight < HalfElfMin || MinHeight > HalfElfMax){
        var ExcludeHalfElf = true;
    } else {
        var ExcludeHalfElf = false;
        HalfElves.push('Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Pallid Elf', 'Half Sea Elf', 'Half Shadar-kai Elf');
    }

    // Variant Half Drow

    var HalfDrowMin = 54;
    var HalfDrowMax = 66;
    if(MaxHeight < HalfDrowMin || MinHeight > HalfDrowMax){
        var ExcludeHalfDrow = true;
    } else {
        var ExcludeHalfDrow = false;
        HalfElves.push('Half Drow');
    }

    // Variant Half Eladrin

    var HalfEladrinMin = 64;
    var HalfEladrinMax = 75;
    if(MaxHeight < HalfEladrinMin || MinHeight > HalfEladrinMax){
        var ExcludeHalfEladrin = true;
    } else {
        var ExcludeHalfEladrin = false;
        HalfElves.push('Half Eladrin', 'Half Eladrin')
    }

    // Test for any Half-Elf

    if(ExcludeHalfElf == false && ExcludeHalfEladrin == false && ExcludeHalfDrow == false) {
        var AnyHalfElf = true;
        AllRaces.push('Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Pallid Elf', 'Half Sea Elf', 'Half Shadar-kai Elf');
    } else if(ExcludeHalfElf == false || ExcludeHalfEladrin == false || ExcludeHalfDrow == false) {
        if(ExcludeHalfElf == false) {
            AllRaces.push('Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Wood Elf', 'Half High Elf', 'Half Pallid Elf', 'Half Sea Elf', 'Half Shadar-kai Elf');
        }
        if(ExcludeHalfDrow == false) {
            AllRaces.push('Half Drow');
        }
        if(ExcludeHalfEladrin == false) {
            AllRaces.push('Half Eladrin, Half Eladrin');
        }
    } else {
        var AnyHalfElf = false;
    }

    // Half Orc

    var HalfOrcMin = 60;
    var HalfOrcMax = 78;
    if(MaxHeight < HalfOrcMin || MinHeight > HalfOrcMax){
        var ExcludeHalfOrc = true;
    } else {
        var ExcludeHalfOrc = false;
        AllRaces.push('Half Orc');
    }

    // Halfing

    var HalfingMin = 33;
    var HalfingMax = 39;
    if(MaxHeight < HalfingMin || MinHeight > HalfingMax){
        var ExcludeHalfing = true;
    } else {
        var ExcludeHalfing = false;
        AllRaces.push('Halfling');
    }

    // Hobgoblin

    var HobgoblinMin = 48;
    var HobgoblinMax = 64;
    if(MaxHeight < HobgoblinMin || MinHeight > HobgoblinMax){
        var ExcludeHobgoblin = true;
    } else {
        var ExcludeHobgoblin = false;
        AllRaces.push('Hobgoblin');
    }

    // Human

    var HumanMin = 58;
    var HumanMax = 72;
    if(MaxHeight < HumanMin || MinHeight > HumanMax){
        var ExcludeHuman = true;
    } else {
        var ExcludeHuman = false;
        AllRaces.push('Human');
    }

    // Kalashtar

    var KalashtarMin = 62;
    var KalashtarMax = 78;
    if(MaxHeight < KalashtarMin || MinHeight > KalashtarMax){
        var ExcludeKalashtar = true;
    } else {
        var ExcludeKalashtar = false;
        AllRaces.push('Kalashtar');
    }

    // Kenku

    var KenkuMin = 53;
    var KenkuMax = 71;
    if(Wings == true){
        if(MaxHeight < KenkuMin || MinHeight > KenkuMax){
            var ExcludeKenku = true;
        } else {
            var ExcludeKenku = false;
            AllRaces.push('Kenku');
        }
    }

    // Kobold

    var KoboldMin = 84;
    var KoboldMax = 96;
    if(Tails == true){
        if(MaxHeight < KoboldMin || MinHeight > KoboldMax){
            var ExcludeKobold = true;
        } else {
            var ExcludeKobold = false;
            AllRaces.push('Kobold');
        }
    }

    // Leonin

    var LeoninMin = 71;
    var LeoninMax = 85;
    if(Tails == true){
        if(MaxHeight < LeoninMin || MinHeight > LeoninMax){
            var ExcludeLeonin = true;
        } else {
            var ExcludeLeonin = false;
            AllRaces.push('Leonin');
        }
    }

    // Lizardfolk

    var LizardfolkMin = 57;
    var LizardfolkMax = 79;
    if(Tails == true){
        if(MaxHeight < LizardfolkMin || MinHeight > LizardfolkMax){
            var ExcludeLizardfolk = true;
        } else {
            var ExcludeLizardfolk = false;
            AllRaces.push('Lizardfolk');
        }
    }

    // Minotaur

    var MinotaurMin = 68;
    var MinotaurMax = 78;
    if(Tails == true){
        if(MaxHeight < MinotaurMin || MinHeight > MinotaurMax){
            var ExcludeMinotaur = true;
        } else {
            var ExcludeMinotaur = false;
            // AllRaces.push('Minotaur')
        }
    }

    // Orc

    var OrcMin = 67;
    var OrcMax = 77;
    if(MaxHeight < OrcMin || MinHeight > OrcMax){
        var ExcludeOrc = true;
    } else {
        var ExcludeOrc = false;
        Orcs.push('Orc');
    }

    // Variant Eberron Orc

    var EberronOrcMin = 63;
    var EberronOrcMax = 81;
    if(MaxHeight < EberronOrcMin || MinHeight > EberronOrcMax){
        var ExcludeEberronOrc = true;
    } else {
        var ExcludeEberronOrc = false;
        Orcs.push('Eberron Orc');
    }

    // Test for any Orc

    if(ExcludeOrc == false && ExcludeEberronOrc == false) {
        var AnyOrc = true;
        AllRaces.push('Any Orc');
    } else if(ExcludeHalfElf == false || ExcludeHalfEladrin == false || ExcludeHalfDrow == false) {
        if(ExcludeOrc == false) {
            AllRaces.push('Orc');
        }
        if(ExcludeEberronOrc == false) {
            AllRaces.push('Eberron Orc');
        }
    } else {
        var AnyOrc = false;
    }

    // Owlfolk

    var OwlfolkMin = 72;
    var OwlfolkMax = 96;
    if(Wings == true){
        if(MaxHeight < OwlfolkMin || MinHeight > OwlfolkMax){
            var ExcludeOwlfolk = true;
        } else {
            var ExcludeOwlfolk = false;
            AllRaces.push('Owlfolk');
        }
    }

    // Rabbitfolk

    var RabbitfolkMin = 46;
    var RabbitfolkMax = 77;
    if(Tails == true){
        if(MaxHeight < RabbitfolkMin || MinHeight > RabbitfolkMax){
            var ExcludeRabbitfolk = true;
        } else {
            var ExcludeRabbitfolk = false;
            AllRaces.push('Rabbitfolk');
        }
    }

    // Satyr

    var SatyrMin = 60;
    var SatyrMax = 72;
    if(Tails == true){
        if(MaxHeight < SatyrMin || MinHeight > SatyrMax){
            var ExcludeSatyr = true;
        } else {
            var ExcludeSatyr = false;
            AllRaces.push('Satyr');
        }
    }

    // Simic Hybrid

    var SimicHybridMin = 72;
    var SimicHybridMax = 96;
    if(MaxHeight < SimicHybridMin || MinHeight > SimicHybridMax){
        var ExcludeSimicHybrid = true;
    } else {
        var ExcludeSimicHybrid = false;
        AllRaces.push('Simic Hybrid');
    }

    // Tabaxi

    var TabaxiMin = 61;
    var TabaxiMax = 75;
    if(Tails == true){
        if(MaxHeight < TabaxiMin || MinHeight > TabaxiMax){
            var ExcludeTabaxi = true;
        } else {
            var ExcludeTabaxi = false;
            AllRaces.push('Tabaxi');
        }
    }

    // Tiefling

    var TieflingMin = 57;
    var TieflingMax = 79;
    if(Tails == true){
        if(MaxHeight < TieflingMin || MinHeight > TieflingMax){
            var ExcludeTiefling = true;
        } else {
            var ExcludeTiefling = false;
            AllRaces.push('Tiefling');
        }
    }

    // Tortle

    var TortleMin = 60;
    var TortleMax = 72;
    if(MaxHeight < TortleMin || MinHeight > TortleMax){
        var ExcludeTortle = true;
    } else {
        var ExcludeTortle = false;
        AllRaces.push('Tortle');
    }

    // Triton

    var TritonMin = 58;
    var TritonMax = 72;
    if(MaxHeight < TritonMin || MinHeight > TritonMax){
        var ExcludeTriton = true;
    } else {
        var ExcludeTriton = false;
        AllRaces.push('Triton');
    }

    // Vedalken

    var VedalkenMin = 64;
    var VedalkenMax = 86;
    if(MaxHeight < VedalkenMin || MinHeight > VedalkenMax){
        var ExcludeVedalken = true;
    } else {
        var ExcludeVedalken = false;
        AllRaces.push('Vedalken');
    }

    // Verdan

    var VerdanMin = 73;
    var VerdanMax = 79;
    if(MaxHeight < VerdanMin || MinHeight > VerdanMax){
        var ExcludeVerdan = true;
    } else {
        var ExcludeVerdan = false;
        AllRaces.push('Verdan');
    }

    // Yuan-ti Pureblood

    var YuantiMin = 60;
    var YuantiMax = 74;
    if(MaxHeight < YuantiMin || MinHeight > YuantiMax){
        var ExcludeYuanti = true;
    } else {
        var ExcludeYuanti = false;
        AllRaces.push('Yuan-ti Pureblood');
    }

// Click button, start random   


        // Show Results

        document.getElementById('results').style.display = "block";
        document.getElementById('DisguiseSelfOptions').style.display = "none";

        // Generate Random

        var race = AllRaces[Math.floor(Math.random()*AllRaces.length)];
        if(race == 'Any Elf') {
            var AnyElf = true;
            var race = Elves[Math.floor(Math.random()*Elves.length)];
        } else if(race == 'Any Half Elf') {
            var HalfElf = true;
            var race = HalfElves[Math.floor(Math.random()*HalfElves.length)];
        } else if(race == 'Any Orc') {
            var AnyOrc = true;
            var race = Orcs[Math.floor(Math.random()*Orcs.length)];
        }else if(race == 'Genasi') {
            var AnyOrc = true;
            var race = Genasi[Math.floor(Math.random()*Genasi.length)];
        };
        var gender = Genders[Math.floor(Math.random()*Genders.length)];
        var age = Ages[Math.floor(Math.random()*Ages.length)];

        // Variable choices

        if(race == 'Lionin'){
            if(gender != 'Female');
            $('#HairLabel').html('Mane: ')
        } else if(race == 'Lizardfolk'){
            $('#HairLabel').html('Dorsal Ridge: ')
        } else if(race == 'Tortle'){
            $('#HairLabel').html('Shell: ')
        } else {
            $('#HairLabel').html('Hair: ')
        }

        if(race == 'Dragonborn' || race == 'Aarakocra' || race == 'Bugbear' || race == 'Kenku' || race == 'Kobold' || race == 'Tabaxi' || race == 'Owlfolk' || race == 'Rabbitfolk'){
            $('#HairRow').hide();
        } else if(race == 'Lionin' && gender != 'Male'){
            if(gender != 'Female'){
                var coin = Math.floor((Math.random() * 2) + 1);
                if(coin == 1){
                    $('#HairRow').hide();
                } else {
                    $('#HairRow').show();
                }
            } else {
                $('#HairRow').hide();
            }
        } else {
            $('#HairRow').show();
        }

        if(race == 'Satyr' || race == 'Leonin' || race == 'Bugbear' || race == 'Aarakocra' || race == 'Kenku' || race == 'Rabbitfolk' || race == 'Owlfolk' || race == 'Tabaxi'){
            $('#FurRow').show();
            if(race == 'Satyr' || race == 'Leonin' || race == 'Bugbear' || race == 'Tabaxi' || race == 'Rabbitfolk' ){
                $('#FurLabel').html('Fur Color: ')
            } else if(race == 'Aarakocra' || race == 'Kenku' || race == 'Owlfolk'){
                $('#FurLabel').html('Feathers: ')
            }
        } else {
            $('#FurRow').hide();
        }

        if(race == 'Leonin' || race == 'Aarakocra' || race == 'Bugbear' || race == 'Kenku' || race == 'Tabaxi' || race == 'Rabbitfolk'){
            $('#SkinRow').hide();
        } else if(race == 'Dragonborn' || race == 'Lizardfolk' || race == 'Kobold') {
            $('#SkinRow').show();
            $('#SkinLabel').html('Scales: ');
        } else if(race == 'Warforged') {
            $('#SkinRow').show();
            $('#SkinLabel').html('Plating: ');
        } else {
            $('#SkinRow').show();
            $('#SkinLabel').html('Skin color: ');
        }

        if(race == 'Satyr' || race == 'Tiefling'){
            $('#HornsRow').show();
        } else {
            $('#HornsRow').hide();
        }

        // Hair General

        const HairGeneral = []

        
        if(race == 'Drow' || race == 'Half Drow'){
            HairGeneral.push('White', 'Silver', 'Pale Yellow', 'Black');
        } else if(race == 'Wood Elf' || race == 'Half Wood Elf'){
            HairGeneral.push('Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black');
        } else if(race == 'High Elf' || race == 'Half High Elf' || race == 'Eladrin' || race == 'Half Eladrin'){
            HairGeneral.push('White', 'Silver', 'Golden Blonde');
        } else if(race == 'Pallid Elf' || race == 'Half Pallid Elf'){
            HairGeneral.push('White', 'Silver', 'Pale Yellow');
        } else if(race == 'Sea Elf'){
            HairGeneral.push('Seafoam Green', 'Black', 'Light Blue', 'Navy Blue', 'Cerulean', 'Bright Blue', 'Silver-White', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Teal', 'Turquoise', 'Kelly Green');
        } else if(race == 'Half Sea Elf'){
            HairGeneral.push('Light Blue', 'Navy Blue', 'Cerulean', 'Bright Blue', 'Silver-White', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Teal', 'Turquoise', 'Kelly Green', 'Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa');
        } else if(race == 'Shadar-kai Elf' || race == 'Half Shadar-kai Elf'){
            HairGeneral.push('Black', 'Grey', 'Silver', 'White');
        }  else if(race == 'Half Shadar-kai Elf'){
            HairGeneral.push('Black', 'White', 'Bright Red', 'Golden Blonde');
        } else if(race == 'Halfling'){
            HairGeneral.push('Black', 'Golden Brown', 'Caramel', 'Cocoa', 'Chestnut', 'Grey', 'Silver', 'White', 'Dirty Blonde');
        } else if(race=='Orc' || race=='Eberron Orc' || race == 'Half Orc'){
            HairGeneral.push('Black', 'Grey');
        } else if(race == 'Tiefling'){
            HairGeneral.push('Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Navy Blue', 'Neon Purple', 'Plum');
        } else if(race == 'Leonin'){
            HairGeneral.push('Tawny', 'Golden', 'Tawny', 'Golden', 'Tawny', 'Golden', 'Black', 'Black', 'White', 'Dark Brown', 'Dark Brown');
        } else if(race == 'Satyr'){
            HairGeneral.push('Dirty Blonde', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Golden Brown', 'Caramel', 'Cocoa');
        } else if(race == 'Air Genasi'){
            HairGeneral.push('Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue');
        } else if(race == 'Water Genasi'){
            HairGeneral.push('Bald', 'Bald', 'Bald', 'Bald', 'Bald', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Baby Blue', 'Seafoam Green');
        } else if(race == 'Fire Genasi'){
            HairGeneral.push('Fire');
        } else if(race == 'Earth Genasi' || race == 'Vedalken'){
            HairGeneral.push('Bald');
        } else if(race == 'Goliath' || race == 'Goblin'){
            HairGeneral.push('Cocoa', 'Chestnut', 'Black');
        } else if(race == 'Aasimar'){
            HairGeneral.push('Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White');
        } else if(race == 'Firbolg'){
            HairGeneral.push('Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn');
        } else if(race == 'Hobgoblin'){
            HairGeneral.push('Cocoa', 'Chestnut', 'Black', 'Auburn', 'Grey');
        } else if(race == 'Lizardfolk'){
            HairGeneral.push('Light Green', 'Dark Green', 'Bright Green', 'Black', 'Light Brown', 'Dark Brown', 'Yellow', 'Orange', 'Light Grey', 'Dark Grey');
        } else if(race == 'Triton'){
            HairGeneral.push('Light Green', 'Dark Green', 'Bright Green', 'Navy Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Baby Blue', 'Seafoam Green', 'Teal');
        } else if(race == 'Yuan-ti Pureblood'){
            HairGeneral.push('Black', 'Dark Green', 'Dark Blue');
        } else if(race == 'Gith'){
            HairGeneral.push('Black', 'Dark Grey', 'Light Grey', 'Scottish/Irish Red', 'Auburn', 'Chestnut');
        } else if(race == 'Verdan'){
            HairGeneral.push('Jade Green', 'Dark Green', 'Light Green', 'Kelly Green', 'Emerald Green', 'Moss Green', 'Black', 'White', 'Bald');
        }  else if(race == 'Tortle'){
            HairGeneral.push('Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Light Brown', 'Green Brown', 'Dark Teal', 'Deep Turquoise');
        } else {
            HairGeneral.push('Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours');
        }
        

        var hair = HairGeneral[Math.floor(Math.random()*HairGeneral.length)];

        // Skin General

        const SkinGeneral = [];

        if(race == 'Dragonborn'){
            SkinGeneral.push('Black', 'Blue', 'Brass', 'Bronze', 'Copper', 'Gold', 'Green', 'Red', 'Silver');
        } else if(race == 'Lizardfolk'){
            HairGeneral.push('Light Green', 'Dark Green', 'Bright Green', 'Black', 'Light Grey', 'Dark Grey');
        } else if(race == 'Drow'){
            SkinGeneral.push('Obsidian', 'Dark Grey', 'Charcoal', 'Dark Blue');
        } else if(race == 'Half Drow' || race == 'Shadar-kai Elf' || race == 'Half Shadar-kai Elf' || race == 'Orc' || race == 'Ebberron Orc'){
            SkinGeneral.push('Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey');
        } else if(race == 'Pallid Elf' || race == 'Half Pallid Elf'){
            SkinGeneral.push('Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain');
        } else if(race == 'Sea Elf' || race == 'Half Sea Elf'){
            SkinGeneral.push('Dark Green', 'Teal', 'Turquoise', 'Silver', 'Indigo', 'Cobalt Blue', 'Cerulean', 'Sapphire Blue', 'Baby Blue', 'Sky Blue', 'Aqua');
        } else if(race == 'Gnome'){
            SkinGeneral.push('Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper', 'Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey');
        } else if(race == 'Half Orc'){
            SkinGeneral.push('Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey', 'Light Green', 'Dark Green', 'Bright Green');
        } else if(race == 'Tiefling'){
            SkinGeneral.push('Red', 'Maroon', 'Orange', 'Bronze', 'Yellow', 'Yellow Green', 'Obsidian', 'Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey');
        } else if(race == 'Fire Genasi'){
            SkinGeneral.push('Bright Red', 'Burnt Orange', 'Charcoal', 'Ash Grey');
        } else if(race == 'Water Genasi'){
            SkinGeneral.push('Light Blue', 'Pale Turquoise', 'Sky Blue', 'Baby Blue', 'Seafoam Green');
        } else if(race == 'Earth Genasi'){
            SkinGeneral.push('Deep Brown', 'Light Brown', 'Green Agate', 'Yellow Agate', 'Red Agate', 'Obsidian', 'Rusted Iron', 'Matte Silver', 'Matte Gold', 'Matte Copper', 'Polished Silver', 'Polished Gold', 'Polished Copper');
        } else if(race == 'Air Genasi'){
            SkinGeneral.push('Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue');
        } else if(race == 'Goliath'){
            SkinGeneral.push('Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey', 'Light Brown', 'Dark Brown');
        } else if(race == 'Aasimar'){
            SkinGeneral.push('Light Brown', 'Dark Brown', 'Emerald Green', 'Silver', 'Gold', 'Copper');
        } else if(race == 'Firbolg'){
            SkinGeneral.push('Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey', 'Light Pink');
        } else if(race == 'Goblin'){
            SkinGeneral.push('Dark Red', 'Umber', 'Bronze', 'Light Orange', 'Orange', 'Dark Orange', 'Burnt Orange', 'Rust', 'Dark Yellow', 'Yellow');
        } else if(race == 'Hobgoblin'){
            SkinGeneral.push('Dark Red', 'Umber', 'Bronze', 'Dark Orange', 'Burnt Orange', 'Rust');
        } else if(race == 'Kobold'){
            SkinGeneral.push('Dark Red', 'Umber', 'Bronze', 'Light Orange', 'Orange', 'Dark Orange', 'Burnt Orange', 'Rust', 'Light Brown', 'Dark Brown');
        } else if(race == 'Triton'){
            SkinGeneral.push('Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Silver Blue');
        } else if(race == 'Yuan-Ti Pureblood'){
            SkinGeneral.push('Pale Green');
        } else if(race == 'Tortle'){
            SkinGeneral.push('Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Light Brown', 'Green Brown', 'Dark Teal', 'Deep Turquoise');
        } else if(race == 'Warforged'){
            SkinGeneral.push('Deep Brown', 'Light Brown', 'Matte Bronze', 'Polished Bronze', 'Rusted Iron', 'Matte Silver', 'Matte Gold', 'Matte Copper', 'Polished Silver', 'Polished Gold', 'Polished Copper');
        } else if(race == 'Gith'){
            SkinGeneral.push('Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Light Brown', 'Green Brown');
        } else if(race == 'Vedalken'){
            SkinGeneral.push('Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Silver Blue', 'Dark Blue', 'Dark Blue Grey', 'Light Blue Grey', 'White Blue', 'Cloud Grey');
        } else if(race == 'Verdan'){
            SkinGeneral.push('Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Green Brown');
        } else {
            SkinGeneral.push('Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper');
        }

        var skin = SkinGeneral[Math.floor(Math.random()*SkinGeneral.length)];

        // Fur Color

        const FurGeneral = [];

        if(race == 'Leonin'){
            FurGeneral.push('Tawny', 'Golden', 'Tawny', 'Golden', 'Tawny', 'Golden', 'Black', 'Black', 'White', 'Dark Brown', 'Dark Brown');
        } else if(race == 'Satyr'){
            FurGeneral.push('Dirty Blonde', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Golden Brown', 'Caramel', 'Cocoa');
        } else if(race == 'Aarakocra'){
            FurGeneral.push('Bright Red', 'Dark Red', 'Burnt Red', 'Bright Orange', 'Dark Orange', 'Light Orange', 'Bright Yellow', 'Light Yellow', 'Light Brown', 'Dark Brown', 'Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey');
        } else if(race == 'Bugbear'){
            FurGeneral.push('Pale Yellow', 'Yellow', 'Dark Yellow', 'Light Orange', 'Orange', 'Dark Orange', 'Tawny', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn');
        } else if(race == 'Kenku'){
            FurGeneral.push('Black', 'Dark Brown', 'Russet');
        } else if(race == 'Tabaxi'){
            FurGeneral.push('Burnt Red', 'Light Orange', 'Orange', 'Dark Orange', 'Burnt Orange', 'Rust', 'Dark Yellow', 'Yellow', 'Light Yellow');
        } else if(race == 'Minotaur'){
            FurGeneral.push('Tawny', 'Light Brown', 'Dark Brown', 'Tawny', 'Light Brown', 'Dark Brown', 'Tawny', 'Light Brown', 'Dark Brown', 'Black', 'Black', 'White');
        } else if(race == 'Owlfolk'){
            FurGeneral.push('Snowy', 'Barred', 'Tawny', 'Light Grey', 'Dark Red', 'Dark Grey');
        } else if(race == 'Rabbitfolk'){
            FurGeneral.push('Sandy', 'White', 'Black', 'Dark Grey', 'Light Grey', 'Steel Grey');
        }

        var fur = FurGeneral[Math.floor(Math.random()*FurGeneral.length)];

        // Horns

        const HornLength = ['Tiny', 'Short', 'Medium', 'Long', 'Very Long'];
        const HornTwist = ['Straight', 'Wavy', 'Twisted'];
        const HornColor = ['Black', 'Light Grey', 'White', 'Dark Grey', 'Light Brown'];

        var hLength = HornLength[Math.floor(Math.random()*HornLength.length)];
        var hTwist = HornTwist[Math.floor(Math.random()*HornTwist.length)];
        var hColor = HornColor[Math.floor(Math.random()*HornColor.length)];

        const horns = hLength + " " + hTwist + " " + hColor

        // Tattoo

        var RandTattoo = Math.floor((Math.random() * 4) + 1);

        if(RandTattoo == 1){
            if(race == 'Leonin' || race == 'Aarakocra' || race == 'Bugbear' || race == 'Kenku' || race == 'Tabaxi' || race == 'Owlfolk' || race == 'Rabbitfolk'){
                var tattoo = false;
                $('#TattooRow').hide();
            } else {
                var tattoo = true;
                $('#TattooRow').show();
            }
        } else {
            var tattoo = false;
            $('#TattooRow').hide();
        }

        const TattooSize = ['Small', 'Medium-sized', 'Large', 'Massive'];
        const TattooArray = [];
        const TattooLocation = ['back', 'forearm', 'bicep', 'calf', 'thigh', 'chest'];

        if(tattoo == true){
            if(race == 'Shadar-kai Elf' || race == 'Wood Elf' || race == 'High Elf' || race =='Pallid Elf' || race == 'Sea Elf' || race == 'Shadar-kai Elf'){
                var ShadowMark = Math.floor((Math.random() * 10) + 1);
                if(ShadowMark == 1){
                    TattooArray.push('Mark of Shadow');
                } else {
                    TattooArray.push('wildcat', 'band of barbed wire', 'flower', 'scorpion', 'sword', 'axe', 'dagger', 'wand', 'fireball');
                }
            } else {
                TattooArray.push('wildcat', 'band of barbed wire', 'flower', 'scorpion', 'sword', 'axe', 'dagger', 'wand', 'fireball');
            }
        }

        var tSize = TattooSize[Math.floor(Math.random()*TattooSize.length)];
        var tType = TattooArray[Math.floor(Math.random()*TattooArray.length)];
        var tLocation = TattooLocation[Math.floor(Math.random()*TattooLocation.length)];

        const TattooDesc = tSize + " " + tType + " on your " + tLocation;

        // Scars

        var RandScar = Math.floor((Math.random() * 10) + 1);

        const ScarSize = ['Small', 'Medium-sized', 'Large', 'Massive'];
        const ScarArray = [];
        const ScarLocation = ['back', 'forearm', 'bicep', 'calf', 'thigh', 'chest'];

        if(RandScar == 1){
            var scar = true;
            $('#ScarRow').show();
            ScarArray.push('keiloid', 'burn', 'intentional scarification', 'surgical', 'jagged')

        } else {
            var scar = false;
            $('#ScarRow').hide();
        }

        var sSize = ScarSize[Math.floor(Math.random()*ScarSize.length)];
        var sType = ScarArray[Math.floor(Math.random()*ScarArray.length)];
        var sLocation = ScarLocation[Math.floor(Math.random()*ScarLocation.length)];

        const ScarDesc = sSize + " " + sType + " scar on your " + sLocation;

        // Height Calc
        
        if(race == 'Aarokocra'){
            var HeightRangeMin = Math.max(MinHeight, AarokocraMin);
            var HeightRangeMax = Math.min(MaxHeight, AarokocraMax);
        }

        if(race == 'Aasimar'){
            var HeightRangeMin = Math.max(MinHeight, AasimarMin);
            var HeightRangeMax = Math.min(MaxHeight, AasimarMax);
        }

        if(race == 'Bugbear'){
            var HeightRangeMin = Math.max(MinHeight, BugbearMin);
            var HeightRangeMax = Math.min(MaxHeight, BugbearMax);
        }

        if(race == 'Dragonborn'){
            var HeightRangeMin = Math.max(MinHeight, DragonbornMin);
            var HeightRangeMax = Math.min(MaxHeight, DragonbornMax);
        }

        if(race == 'Dwarf'){
            var HeightRangeMin = Math.max(MinHeight, DwarfMin);
            var HeightRangeMax = Math.min(MaxHeight, DwarfMax);
        }

        if(race == 'Wood Elf' || race == 'High Elf' || race == 'Pallid Elf' || race == 'Sea Elf' || race == 'Shadar-kai Elf'){
            var HeightRangeMin = Math.max(MinHeight, ElfMin);
            var HeightRangeMax = Math.min(MaxHeight, ElfMax);
        }

        if(race == 'Eladrin'){
            var HeightRangeMin = Math.max(MinHeight, EladrinMin);
            var HeightRangeMax = Math.min(MaxHeight, EladrinMax);
        }

        if(race == 'Drow'){
            var HeightRangeMin = Math.max(MinHeight, DrowMin);
            var HeightRangeMax = Math.min(MaxHeight, DrowMax);
        }

        if(race == 'Firbolg'){
            var HeightRangeMin = Math.max(MinHeight, FirbolgMin);
            var HeightRangeMax = Math.min(MaxHeight, FirbolgMax);
        }

        if(race == 'Air Genasi' || race == 'Water Genasi' || race == 'Earth Genasi' || race == 'Fire Genasi'){
            var HeightRangeMin = Math.max(MinHeight, GenasiMin);
            var HeightRangeMax = Math.min(MaxHeight, GenasiMax);
        }

        if(race == 'Gith'){
            var HeightRangeMin = Math.max(MinHeight, GithMin);
            var HeightRangeMax = Math.min(MaxHeight, GithMax);
        }

        if(race == 'Gnome'){
            var HeightRangeMin = Math.max(MinHeight, GnomeMin);
            var HeightRangeMax = Math.min(MaxHeight, GnomeMax);
        }

        if(race == 'Goblin'){
            var HeightRangeMin = Math.max(MinHeight, GoblinMin);
            var HeightRangeMax = Math.min(MaxHeight, GoblinMax);
        }

        if(race == 'Goliath'){
            var HeightRangeMin = Math.max(MinHeight, GoliathMin);
            var HeightRangeMax = Math.min(MaxHeight, GoliathMax);
        }

        if(race == 'Half Wood Elf' || race == 'Half High Elf' || race == 'Half Pallid Elf' || race == 'Half Sea Elf' || race == 'Half Shadar-kai Elf'){
            var HeightRangeMin = Math.max(MinHeight, HalfElfMin);
            var HeightRangeMax = Math.min(MaxHeight, HalfElfMax);
        }

        if(race == 'HalfEladrin'){
            var HeightRangeMin = Math.max(MinHeight, HalfEladrinMin);
            var HeightRangeMax = Math.min(MaxHeight, HalfEladrinMax);
        }

        if(race == 'Half Drow'){
            var HeightRangeMin = Math.max(MinHeight, HalfDrowMin);
            var HeightRangeMax = Math.min(MaxHeight, HalfDrowMax);
        }

        if(race == 'Half Orc'){
            var HeightRangeMin = Math.max(MinHeight, HalfOrcMin);
            var HeightRangeMax = Math.min(MaxHeight, HalfOrcMax);
        }

        if(race == 'Halfling'){
            var HeightRangeMin = Math.max(MinHeight, HalflingMin);
            var HeightRangeMax = Math.min(MaxHeight, HalflingMax);
        }

        if(race == 'Hobgoblin'){
            var HeightRangeMin = Math.max(MinHeight, HobgoblinMin);
            var HeightRangeMax = Math.min(MaxHeight, HobgoblinMax);
        }

        if(race == 'Human'){
            var HeightRangeMin = Math.max(MinHeight, HumanMin);
            var HeightRangeMax = Math.min(MaxHeight, HumanMax);
        }

        if(race == 'Kalashtar'){
            var HeightRangeMin = Math.max(MinHeight, KalashtarMin);
            var HeightRangeMax = Math.min(MaxHeight, KalashtarMax);
        }

        if(race == 'Kenku'){
            var HeightRangeMin = Math.max(MinHeight, KenkuMin);
            var HeightRangeMax = Math.min(MaxHeight, KenkuMax);
        }
        
        if(race == 'Kobold'){
            var HeightRangeMin = Math.max(MinHeight, KoboldMin);
            var HeightRangeMax = Math.min(MaxHeight, KoboldMax);
        }

        if(race == 'Leonin'){
            var HeightRangeMin = Math.max(MinHeight, LeoninMin);
            var HeightRangeMax = Math.min(MaxHeight, LeoninMax);
        }

        if(race == 'Lizardfolk'){
            var HeightRangeMin = Math.max(MinHeight, LizardfolkMin);
            var HeightRangeMax = Math.min(MaxHeight, LizardfolkMax);
        }

        if(race == 'Orc' || race == 'Eberron Orc'){
            var HeightRangeMin = Math.max(MinHeight, OrcMin);
            var HeightRangeMax = Math.min(MaxHeight, OrcMax);
        }

        if(race == 'Owlfolk'){
            var HeightRangeMin = Math.max(MinHeight, OwlfolkMin);
            var HeightRangeMax = Math.min(MaxHeight, OwlfolkMax);
        }

        if(race == 'Rabbitfolk'){
            var HeightRangeMin = Math.max(MinHeight, RabbitfolkMin);
            var HeightRangeMax = Math.min(MaxHeight, RabbitfolkMax);
        }

        if(race == 'Satyr'){
            var HeightRangeMin = Math.max(MinHeight, SatyrMin);
            var HeightRangeMax = Math.min(MaxHeight, SatyrMax);
        }

        if(race == 'Simic Hybrid'){
            var HeightRangeMin = Math.max(MinHeight, SimicHybridMin);
            var HeightRangeMax = Math.min(MaxHeight, SimicHybridMax);
        }

        if(race == 'Tabaxi'){
            var HeightRangeMin = Math.max(MinHeight, TabaxiMin);
            var HeightRangeMax = Math.min(MaxHeight, TabaxiMax);
        }

        if(race == 'Tiefling'){
            var HeightRangeMin = Math.max(MinHeight, TieflingMin);
            var HeightRangeMax = Math.min(MaxHeight, TieflingMax);
        }

        if(race == 'Tortle'){
            var HeightRangeMin = Math.max(MinHeight, TortleMin);
            var HeightRangeMax = Math.min(MaxHeight, TortleMax);
        }
        
        if(race == 'Triton'){
            var HeightRangeMin = Math.max(MinHeight, TritonMin);
            var HeightRangeMax = Math.min(MaxHeight, TritonMax);
        }

        if(race == 'Vedalken'){
            var HeightRangeMin = Math.max(MinHeight, VedalkenMin);
            var HeightRangeMax = Math.min(MaxHeight, VedalkenMax);
        }

        if(race == 'Verdan'){
            var HeightRangeMin = Math.max(MinHeight, VerdanMin);
            var HeightRangeMax = Math.min(MaxHeight, VerdanMax);
        }

        if(race == 'Yuan-ti Pureblood'){
            var HeightRangeMin = Math.max(MinHeight, YuantiMin);
            var HeightRangeMax = Math.min(MaxHeight, YuantiMax);
        }

        var RandHeight = Math.floor((Math.random() * (HeightRangeMax - HeightRangeMin)) + HeightRangeMin);
        var RandHeightFeet = Math.floor(RandHeight / 12 );
        var RandHeightInches = RandHeight % 12;

        const height = RandHeightFeet + " &apos;" + RandHeightInches + "&quot;"

        $('#RaceOutput').html(race);
        $('#GenderOutput').html(gender);
        $('#AgeOutput').html(age);
        $('#HeightOutput').html(height);
        $('#HairOutput').html(hair);
        $('#SkinOutput').html(skin);
        $('#FurOutput').html(fur);
        $('#HornsOutput').html(horns);
        $('#ScarOutput').html(ScarDesc);
        $('#TattooOutput').html(TattooDesc);

        console.log(AllRaces.length);
    };

    function ClearArray(){
        AllRaces.length = 0;
    }

    function Reset(){
        ClearArray();
        document.getElementById('results').style.display = "none";
        document.getElementById('DisguiseSelfOptions').style.display = "block";
    }

    $("#SpecificExclusions").click(function(){
        $("#exclusionButtons").hide();
        $(".race-selection").show();
        ManualSelection = true;
    });

    $("#BroadExclusions").click(function(){
        $("#exclusionButtons").show();
        $(".race-selection").hide();
        ManualSelection = false
    });

    function NewLook(){
        ClearArray();
        DisguiseMe();
    }

    $( "#ResetOption" ).click(Reset);

    $("#DisguiseMe").click(DisguiseMe);
    $("#NewLook").click(NewLook);
});