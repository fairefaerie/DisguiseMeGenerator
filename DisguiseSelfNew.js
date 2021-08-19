

// The purpose of this file is to test and adjust JavaScript options with Objects. This file can be called by changing the filename on line 27 in DisguiseSelfinProgress.html

// ########## Variable Space ##########

    // === Race Variables and Arrays ===

        // All possible races: ["Aarokocra", "Aasimar", "Bugbear", "Dragonborn", "Dwarf", "Elf", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Grung", "HalfElf", "HalfOrc", "Halfling", "Hobgoblin", "Human", "Kalashtar", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Owlfolk", "Rabbitfolk", "Satyr", "SimicHybrid", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalken", "Verdan", "Warforged", "Yuan-ti"];

        const AllRaces = [];
        var AnyElf;
        const Elves = [];
        var AnyHalfElf;
        const HalfElves = [];
        var AnyOrc;
        const Orcs = [];
        const Genasi = ['Fire Genasi', 'Water Genasi', 'Air Genasi', 'Earth Genasi'];
        var Wings = true;
        var Tails = true;
        var ManualSelection = false;
        var race;

    // Genders

        const Genders = ['Male', 'Female', 'Male', 'Female', 'Male', 'Female', 'Indeterminiate'];
        var gender;

    // Ages

        const Ages = ['Young', 'Teen', 'Adult', 'Middle-Aged', 'Teen', 'Adult', 'Middle-Aged', 'Teen', 'Adult', 'Middle-Aged', 'Old', 'Elderly'];
        var age;

    // Details

        // Tattoos
        const TattooSize = ['Small', 'Medium-sized', 'Large', 'Massive'];
        const TattooArray = [];
        const TattooLocation = ['back', 'forearm', 'bicep', 'calf', 'thigh', 'chest'];
        var TattooDesc;
        var tattoo = false;

        // Scars
        const ScarSize = ['Small', 'Medium-sized', 'Large', 'Massive'];
        const ScarArray = ['keiloid', 'burn', 'intentional scarification', 'surgical', 'jagged'];
        const ScarLocation = ['back', 'forearm', 'bicep', 'calf', 'thigh', 'chest'];
        var ScarDesc;
        var scar = false;

        // Horns
        const HornLength = ['Tiny', 'Short', 'Medium', 'Long', 'Very Long'];
        const HornTwist = ['Straight', 'Wavy', 'Twisted'];
        const HornColor = ['Black', 'Light Grey', 'White', 'Dark Grey', 'Light Brown'];
        var horns;

        // Skin, Hair, Scales, Fur, etc.

        const SkinGeneral = [];
        var skin;
        const HairGeneral = [];
        var hair;
        const FurGeneral = [];
        var fur;
        var RaceMin;
        var RaceMax;

    // Height Variables

        var FeetInches;
        var Inches;
        var HeightInches;
        var CharMinHeight;
        var CharMaxHeight;
        var height;
        var RandHeight;
        var RandHeightFeet;
        var RandHeightInches;
        var HeightWarning;

    // Heights

        // Race Objects and Properties

        var Aarokocra = {
            Name: 'Aarokocra',
            MinHeight: 48,
            MaxHeight: 60,
            Wings: true,
            Feathers: true,
            Skin: false,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: false,
            Include: false,
            FeatherArray: ['Bright Red', 'Dark Red', 'Burnt Red', 'Bright Orange', 'Dark Orange', 'Light Orange', 'Bright Yellow', 'Light Yellow', 'Light Brown', 'Dark Brown', 'Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey']
        }

        var Aasimar = {
            Name: 'Aasimar',
            MinHeight: 60,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Light Brown', 'Dark Brown', 'Emerald Green', 'Silver', 'Gold', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White']
        }

        var Bugbear = {
            Name: 'Bugbear',
            MinHeight: 72,
            MaxHeight: 96,
            Wings: false,
            Feathers: false,
            Skin: false,
            Scales: false,
            Fur: true,
            Tail: false,
            Hair: false,
            Include: false,
            FurArray: ['Pale Yellow', 'Yellow', 'Dark Yellow', 'Light Orange', 'Orange', 'Dark Orange', 'Tawny', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn']
        }

        var Dragonborn = {
            Name: 'Dragonborn',
            MinHeight: 72,
            MaxHeight: 84,
            Wings: false,
            Feathers: false,
            Skin: false,
            Scales: true,
            Fur: true,
            Tail: false,
            Hair: false,
            Include: false,
            ScaleArray: ['Black', 'Blue', 'Brass', 'Bronze', 'Copper', 'Gold', 'Green', 'Red', 'Silver']
        }

        var Dwarf = {
            Name: 'Dwarf',
            MinHeight: 56,
            MaxHeight: 74,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var HighElf = {
            Name: 'High Elf',
            MinHeight: 56,
            MaxHeight: 74,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['White', 'Silver', 'Golden Blonde']
        }

        var WoodElf = {
            Name: 'Wood Elf',
            MinHeight: 56,
            MaxHeight: 74,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black']
        }

        var PallidElf = {
            Name: 'Pallid Elf',
            MinHeight: 56,
            MaxHeight: 74,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain'],
            HairArray: ['White', 'Silver', 'Pale Yellow']
        }

        var SeaElf = {
            Name: 'Sea Elf',
            MinHeight: 56,
            MaxHeight: 74,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Green', 'Teal', 'Turquoise', 'Silver', 'Indigo', 'Cobalt Blue', 'Cerulean', 'Sapphire Blue', 'Baby Blue', 'Sky Blue', 'Aqua'],
            HairArray: ['Seafoam Green', 'Black', 'Light Blue', 'Navy Blue', 'Cerulean', 'Bright Blue', 'Silver-White', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Teal', 'Turquoise', 'Kelly Green']
        }

        var ShadarkaiElf = {
            Name: 'Shadar-kai Elf',
            MinHeight: 56,
            MaxHeight: 74,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey'],
            HairArray: ['Black', 'Grey', 'Silver', 'White']
        }

        var Eladrin = {
            Name: 'Eladrin',
            MinHeight: 65,
            MaxHeight: 73,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['White', 'Silver', 'Pale Gold']
        }

        var DrowElf = {
            Name: 'Drow',
            MinHeight: 55,
            MaxHeight: 65,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Obsidian', 'Dark Grey', 'Charcoal', 'Dark Blue'],
            HairArray: ['White', 'Silver', 'Pale Yellow', 'Black']
        }

        var Firbolg = {
            Name: 'Firbolg',
            MinHeight: 84,
            MaxHeight: 96,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey', 'Light Pink'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn']
        }

        var FireGenasi = {
            Name: 'Fire Genasi',
            MinHeight: 60,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Bright Red', 'Burnt Orange', 'Charcoal', 'Ash Grey'],
            HairArray: ['Fire']
        }

        var WaterGenasi = {
            Name: 'Water Genasi',
            MinHeight: 60,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Light Blue', 'Pale Turquoise', 'Sky Blue', 'Baby Blue', 'Seafoam Green'],
            HairArray: ['Bald', 'Bald', 'Bald', 'Bald', 'Bald', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Baby Blue', 'Seafoam Green']
        }

        var AirGenasi = {
            Name: 'Air Genasi',
            MinHeight: 60,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue'],
            HairArray: ['Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue']
        }

        var EarthGenasi = {
            Name: 'Earth Genasi',
            MinHeight: 60,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Deep Brown', 'Light Brown', 'Green Agate', 'Yellow Agate', 'Red Agate', 'Obsidian', 'Rusted Iron', 'Matte Silver', 'Matte Gold', 'Matte Copper', 'Polished Silver', 'Polished Gold', 'Polished Copper'],
            HairArray: ['Bald']
        }

        var Gith = {
            Name: 'Gith',
            MinHeight: 61,
            MaxHeight: 72,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Light Brown', 'Green Brown'],
            HairArray: ['Black', 'Dark Grey', 'Light Grey', 'Scottish/Irish Red', 'Auburn', 'Chestnut']
        }

        var Gnome = {
            Name: 'Gnome',
            MinHeight: 36,
            MaxHeight: 48,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var Goblin = {
            Name: 'Goblin',
            MinHeight: 36,
            MaxHeight: 48,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Red', 'Umber', 'Bronze', 'Light Orange', 'Orange', 'Dark Orange', 'Burnt Orange', 'Rust', 'Dark Yellow', 'Yellow'],
            HairArray: ['Cocoa', 'Chestnut', 'Black']
        }

        var Goliath = {
            Name: 'Goliath',
            MinHeight: 84,
            MaxHeight: 96,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey', 'Light Brown', 'Dark Brown'],
            HairArray: ['Cocoa', 'Chestnut', 'Black']
        }

        var HalfHighElf = {
            Name: 'Half High Elf',
            MinHeight: 55,
            MaxHeight: 75,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var HalfWoodElf = {
            Name: 'Half Wood Elf',
            MinHeight: 55,
            MaxHeight: 75,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var HalfPallidElf = {
            Name: 'Half Pallid Elf',
            MinHeight: 55,
            MaxHeight: 75,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var HalfSeaElf = {
            Name: 'Half Sea Elf',
            MinHeight: 55,
            MaxHeight: 75,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Green', 'Teal', 'Turquoise', 'Silver', 'Indigo', 'Cobalt Blue', 'Cerulean', 'Sapphire Blue', 'Baby Blue', 'Sky Blue', 'Aqua'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var HalfShadarkaiElf = {
            Name: 'Half Shadar-kai Elf',
            MinHeight: 55,
            MaxHeight: 75,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var HalfEladrin = {
            Name: 'Half Eladrin',
            MinHeight: 64,
            MaxHeight: 75,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var HalfDrow = {
            Name: 'Half Drow',
            MinHeight: 54,
            MaxHeight: 66,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Strawberry Blonde', 'Black', 'Silver', 'White', 'Bald']
        }

        var HalfOrc = {
            Name: 'Half Orc',
            MinHeight: 60,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey', 'Light Green', 'Dark Green', 'Bright Green'],
            HairArray: ['Black', 'Grey', 'Golden Brown', 'Caramel', 'Cocoa']
        }

        var Halfling = {
            Name: 'Halfling',
            MinHeight: 33,
            MaxHeight: 39,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Black', 'Golden Brown', 'Caramel', 'Cocoa', 'Chestnut', 'Grey', 'Silver', 'White', 'Dirty Blonde']
        }

        var Hobgoblin = {
            Name: 'Hobgoblin',
            MinHeight: 48,
            MaxHeight: 64,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Red', 'Umber', 'Bronze', 'Dark Orange', 'Burnt Orange', 'Rust'],
            HairArray: ['Cocoa', 'Chestnut', 'Black', 'Auburn', 'Grey']
        }

        var Human = {
            Name: 'Human',
            MinHeight: 58,
            MaxHeight: 72,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var Kalashtar = {
            Name: 'Kalashtar',
            MinHeight: 62,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours']
        }

        var Kenku = {
            Name: 'Kenku',
            MinHeight: 53,
            MaxHeight: 71,
            Wings: true,
            Feathers: true,
            Skin: false,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: false,
            Include: false,
            FeathersArray: ['Black', 'Dark Brown', 'Russet']
        }

        var Kobold = {
            Name: 'Kobold',
            MinHeight: 84,
            MaxHeight: 96,
            Wings: false,
            Feathers: false,
            Skin: false,
            Scales: true,
            Fur: false,
            Tail: true,
            Hair: false,
            Include: false,
            ScalesArray: ['Dark Red', 'Umber', 'Bronze', 'Light Orange', 'Orange', 'Dark Orange', 'Burnt Orange', 'Rust', 'Light Brown', 'Dark Brown']
        }

        var Leonin = {
            Name: 'Leonin',
            MinHeight: 71,
            MaxHeight: 85,
            Wings: false,
            Feathers: false,
            Skin: false,
            Scales: false,
            Fur: true,
            Tail: true,
            Hair: true,
            Include: false,
            FurArray: ['Tawny', 'Golden', 'Tawny', 'Golden', 'Tawny', 'Golden', 'Black', 'Black', 'White', 'Dark Brown', 'Dark Brown'],
            HairArray: ['Tawny', 'Golden', 'Tawny', 'Golden', 'Tawny', 'Golden', 'Black', 'Black', 'White', 'Dark Brown', 'Dark Brown']
        }

        var Lizardfolk = {
            Name: 'Lizardfolk',
            MinHeight: 62,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: false,
            Scales: true,
            Fur: false,
            Tail: true,
            Hair: true,
            Include: false,
            ScalesArray: ['Light Green', 'Dark Green', 'Bright Green', 'Black', 'Light Brown', 'Dark Brown', 'Yellow', 'Orange', 'Light Grey', 'Dark Grey'],
            HairArray: ['Light Green', 'Dark Green', 'Bright Green', 'Black', 'Light Brown', 'Dark Brown', 'Yellow', 'Orange', 'Light Grey', 'Dark Grey']
        }

        var Orc = {
            Name: 'Orc',
            MinHeight: 67,
            MaxHeight: 77,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey'],
            HairArray: ['Black', 'Grey']
        }

        var EberronOrc = {
            Name: 'Ebberon Orc',
            MinHeight: 63,
            MaxHeight: 81,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey'],
            HairArray: ['Black', 'Grey']
        }

        var Owlfolk = {
            Name: 'Owlfolk',
            MinHeight: 62,
            MaxHeight: 78,
            Wings: true,
            Feathers: true,
            Skin: false,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: false,
            Include: false,
            FeathersArray: ['Snowy', 'Barred', 'Tawny', 'Light Grey', 'Dark Red', 'Dark Grey']
        }

        var Rabbitfolk = {
            Name: 'Rabbitfolk',
            MinHeight: 46,
            MaxHeight: 77,
            Wings: false,
            Feathers: false,
            Skin: false,
            Scales: false,
            Fur: true,
            Tail: true,
            Hair: false,
            Include: false,
            FurArray: ['Sandy', 'White', 'Black', 'Dark Grey', 'Light Grey', 'Steel Grey']
        }

        var Satyr = {
            Name: 'Satyr',
            MinHeight: 60,
            MaxHeight: 71,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: true,
            Tail: true,
            Hair: true,
            Include: false,
            SkinArray: ['Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Bronze', 'Copper'],
            HairArray: ['Platinum Blonde', 'Blonde', 'Dirty Blonde', 'Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Silver', 'White', 'Bubblegum Pink', 'Magenta', 'Neon Purple', 'Plum', 'Teal', 'Bright blue', 'Baby Blue', 'Cerulean', 'Lime Green', 'Moss Green', 'Orange', 'Kelly Green', 'Bald', 'Rainbow of colours'],
            FurArray: ['Dirty Blonde', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Golden Brown', 'Caramel', 'Cocoa']
        }

        var SimicHybrid = {
            Name: 'Simic Hybrid',
            MinHeight: 72,
            MaxHeight: 96,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: false,
            Include: false,
            SkinArray: ['Alabaster', 'Pale Ivory', 'Ivory', 'Porcelain', 'Beige', 'Warm Beige', 'Honey', 'Golden', 'Tan', 'Olive', 'Taupe', 'Golden', 'Ebony', 'Bronze', 'Copper']
        }

        var Tabaxi = {
            Name: 'Tabaxi',
            MinHeight: 61,
            MaxHeight: 75,
            Wings: false,
            Feathers: false,
            Skin: false,
            Scales: false,
            Fur: true,
            Tail: true,
            Hair: false,
            Include: false,
            FurArray: ['Burnt Red', 'Light Orange', 'Orange', 'Dark Orange', 'Burnt Orange', 'Rust', 'Dark Yellow', 'Yellow', 'Light Yellow']
        }

        var Tiefling = {
            Name: 'Tiefling',
            MinHeight: 57,
            MaxHeight: 79,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Red', 'Maroon', 'Orange', 'Bronze', 'Yellow', 'Yellow Green', 'Obsidian', 'Dark Grey', 'Light Grey', 'Pewter', 'Cloud Grey'],
            HairArray: ['Golden Brown', 'Caramel', 'Cocoa', 'Strawberry Blonde', 'Scottish/Irish Red', 'Auburn', 'Chestnut', 'Black', 'Navy Blue', 'Neon Purple', 'Plum']
        }

        var Tortle = {
            Name: 'Tortle',
            MinHeight: 62,
            MaxHeight: 78,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: true,
            Fur: false,
            Tail: false,
            Hair: false,
            Include: false,
            SkinArray: ['Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Light Brown', 'Green Brown', 'Dark Teal', 'Deep Turquoise'],
            ScaleArray: ['Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Light Brown', 'Green Brown', 'Dark Teal', 'Deep Turquoise']
        }

        var Triton = {
            Name: 'Triton',
            MinHeight: 58,
            MaxHeight: 72,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Silver Blue'],
            HairArray: ['Light Green', 'Dark Green', 'Bright Green', 'Navy Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Baby Blue', 'Seafoam Green', 'Teal']
        }

        var Vedalken = {
            Name: 'Vedalken',
            MinHeight: 73,
            MaxHeight: 79,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: false,
            Include: false,
            SkinArray: ['Baby Blue', 'Cornflower Blue', 'Light Blue', 'Pale Turquoise', 'Sky Blue', 'Silver Blue', 'Dark Blue', 'Dark Blue Grey', 'Light Blue Grey', 'White Blue', 'Cloud Grey']
        }

        var Verdan = {
            Name: 'Verdan',
            MinHeight: 73,
            MaxHeight: 79,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Yellow Green', 'Pale Green', 'Moss Green', 'Olive Green', 'Dark Green', 'Green Brown'],
            HairArray: ['Jade Green', 'Dark Green', 'Light Green', 'Kelly Green', 'Emerald Green', 'Moss Green', 'Black', 'White', 'Bald']
        }

        var Yuanti = {
            Name: 'Yuan-ti Pureblood',
            MinHeight: 60,
            MaxHeight: 74,
            Wings: false,
            Feathers: false,
            Skin: true,
            Scales: false,
            Fur: false,
            Tail: false,
            Hair: true,
            Include: false,
            SkinArray: ['Pale Green'],
            HairArray: ['Black', 'Dark Green', 'Dark Blue']
        }

// Build race array

    const RaceArray = ['Aarokocra', 'Aasimar', 'Bugbear', 'Dragonborn', 'Dwarf', 'HighElf', 'WoodElf', 'PallidElf', 'SeaElf', 'ShadarkaiElf', 'Eladrin', 'DrowElf', 'Firbolg', 'FireGenasi', 'WaterGenasi', 'AirGenasi', 'EarthGenasi', 'Gith', 'Gnome', 'Goblin', 'Goliath', 'HalfHighElf', 'HalfWoodElf HalfPallidElf', 'HalfSeaElf', 'HalfShadarkaiElf', 'HalfEladrin', 'HalfDrow', 'HalfOrc', 'Halfling', 'Hobgoblin', 'Human', 'Kalashtar', 'Kenku', 'Kobold', 'Leonin', 'Lizardfolk', 'Orc', 'EberronOrc', 'Owlfolk', 'Rabbitfolk', 'Satyr', 'SimicHybrid', 'Tabaxi', 'Tiefling', 'Tortle', 'Triton', 'Vedalken', 'Verdan', 'Yuanti']

    function Alert(){
        alert('Clicked!');
    }

// Click Buttons, do things
$(document).ready(function(){
    function CharHeight(){
        FeetInches = document.getElementById("HeightFeet").value;
        FeetInches = FeetInches * 12;
        Inches = document.getElementById("HeightInches").value;
        HeightInches = parseFloat(FeetInches) + parseFloat(Inches);
        CharMinHeight = parseFloat(HeightInches) - 12;
        CharMaxHeight = parseFloat(HeightInches) + 12;
    }

    function BuildArray(){
        CharHeight();
        for (let i = 0; i < RaceArray.length; i++){
            var RaceMinHeight = RaceArray[i] + '.MinHeight';
            var RaceMaxHeight = RaceArray[i] + '.MaxHeight';
            //var RaceName = RaceArray[i] + '.Name';
            //var RaceName = eval(RaceName);
            //if(CharMaxHeight < eval(RaceMinHeight) || CharMinHeight > eval(RaceMaxHeight)){

            //} else {
            //    AllRaces.push = RaceArray[i];
            //}
        }
        console.log(RaceMinHeight + " " + CharMaxHeight);
    }

    $("#DisguiseMe").click(BuildArray);
});