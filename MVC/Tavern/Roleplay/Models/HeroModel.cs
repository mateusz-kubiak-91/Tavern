using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Roleplay.Models
{
    public class HeroModel
    {
        public int ID { get; set; }
        public IdentityUser User { get; set; }
        //Basic Data
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Race { get; set; }
        public int Age { get; set; }
        public string Profession { get; set; }

        //Equipment
        public bool Abacus { get; set; }
        public bool Lock_Picks { get; set; }
        public bool Brass_Knuckles { get; set; }
        public bool Golden_Crown_x10 { get; set; }
        public bool Lantern { get; set; }
        public bool Pickaxe { get; set; }
        public bool Bow_And_Arow_x10 { get; set; }
        public bool Snare { get; set; }
        public bool Musical_Instrument { get; set; }
        public bool Writing_Material { get; set; }

        //Skills
        public bool Lock_Picking { get; set; }
        public bool Reading_and_Writing { get; set; }
        public bool Survival { get; set; }
        public bool Craft_Maining { get; set; }
        public bool Bargain { get; set; }
        public bool Sneaking { get; set; }
        public bool Drinking_God { get; set; }
        public bool Intimidation { get; set; }
        public bool Perceptivity { get; set; }
        public bool Gossip { get; set; }

        //Main Statistic 
        public int Wepon_Skill { get; set; }
        public int Ballistic_Skill { get; set; }
        public int Strength { get; set; }
        public int Toughness { get; set; }
        public int Agility { get; set; }
        public int Intelligence { get; set; }
        public int Will_Power { get; set; }
        public int Fellowship { get; set; }

        //Secondary Statistic
        public int Attack { get; set; }
        public int Wounds { get; set; }
        public int Strength_Bonus { get; set; }
        public int Toughness_Bonus { get; set; }
        public int Movement { get; set; }
        public int Magic { get; set; }
        public int Insanity_Points { get; set; }
        public int Fate_Points { get; set; }
    }
}
