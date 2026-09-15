export const abilities = {
  "Anti-Mage": [
    {
      "name": "Mana Break",
      "image": "/images/abilities/antimage_mana_break.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Blink",
      "image": "/images/abilities/antimage_blink.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Short distance teleportation that allows Anti-Mage to move in and out of combat.",
      "manaCost": "60 / 55 / 50 / 45",
      "cooldown": "10.5 / 9 / 7.5 / 6"
    },
    {
      "name": "Counterspell",
      "image": "/images/abilities/antimage_counterspell.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Passively grants magic resistance. Counterspell may be activated to create an anti-magic shell around Anti-Mage that blocks and reflects any targeted spells.",
      "manaCost": "50",
      "cooldown": "15 / 11 / 7 / 3"
    },
    {
      "name": "Persecutor",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Attacks slow enemies based on how much mana they are missing. Min slow at 50% mana, up to max slow at 0% mana. No effect if enemy is above 50% mana.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Mana Void",
      "image": "/images/abilities/antimage_mana_void.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies. The main target is also mini-stunned.",
      "manaCost": "100 / 150 / 200",
      "cooldown": "100 / 85 / 70"
    }
  ],
  "Axe": [
    {
      "name": "Berserker's Call",
      "image": "/images/abilities/axe_berserkers_call.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Axe taunts nearby enemy units, forcing them to attack him while he gains bonus armor during the duration.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "18 / 16 / 14 / 12"
    },
    {
      "name": "Battle Hunger",
      "image": "/images/abilities/axe_battle_hunger.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Enrages an enemy unit, causing it to take damage over time until it kills another unit or the duration ends. The enemy is slowed as long as they are facing away from Axe.",
      "manaCost": "50 / 60 / 70 / 80",
      "cooldown": "20 / 15 / 10 / 5"
    },
    {
      "name": "Counter Helix",
      "image": "/images/abilities/axe_counter_helix.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "After a set number of attacks, Axe will perform a helix counter attack, dealing pure damage to all nearby enemies.",
      "manaCost": "0",
      "cooldown": "0.3"
    },
    {
      "name": "Culling Blade",
      "image": "/images/abilities/axe_culling_blade.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Axe spots a weakness and strikes, dealing pure damage. When an enemy hero is killed with Culling Blade, its cooldown is reset, and all nearby allied units gain bonus movement speed and armor.\n\nAxe permanently drenches his blade every time he kills an enemy Hero with Culling Blade, gaining bonus armor for each stack.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "80 / 75 / 70"
    },
    {
      "name": "One Man Army",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Axe gains Strength based on 50% of his Armor as long as there are no allied heroes within 700 distance from Axe. The effect fades over 3s after approaching an ally.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Bane": [
    {
      "name": "Enfeeble",
      "image": "/images/abilities/bane_enfeeble.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Deals damage every second and lowers the enemy's total attack damage and cast range.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "22 / 17 / 12 / 7"
    },
    {
      "name": "Brain Sap",
      "image": "/images/abilities/bane_brain_sap.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Feasts on the vital energies of an enemy unit, healing Bane and dealing damage.",
      "manaCost": "105 / 120 / 135 / 150",
      "cooldown": "17 / 15 / 13 / 11"
    },
    {
      "name": "Nightmare",
      "image": "/images/abilities/bane_nightmare.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Puts the target enemy or friendly Hero to sleep. Sleeping units walk in Bane's chosen direction and are awakened when damaged. If the target was directly attacked, the Nightmare passes to the attacking unit. Bane can attack and damage Nightmared targets freely.\n\n Can be put on alt-cast to have the target stand still.",
      "manaCost": "120 / 130 / 140 / 150",
      "cooldown": "25 / 22 / 19 / 16"
    },
    {
      "name": "Fiend's Grip",
      "image": "/images/abilities/bane_fiends_grip.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Grips an enemy unit, disabling it and causing heavy damage over time, while stealing mana every 0.5 seconds based on the unit's maximum mana.",
      "manaCost": "200 / 300 / 400",
      "cooldown": "120 / 110 / 100"
    },
    {
      "name": "Nightmare End",
      "image": "/images/abilities/bane_nightmare_end.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ends all ongoing Nightmares.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Ichor of Nyctasha",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Every time Bane kills an enemy hero or they die under the effect of Bane's debuff, they receive a Terror for the rest of the game that decreases their status resistance to Bane's subsequent debuffs.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Bloodseeker": [
    {
      "name": "Bloodrage",
      "image": "/images/abilities/bloodseeker_bloodrage.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second.",
      "manaCost": "0",
      "cooldown": "14 / 12 / 10 / 8"
    },
    {
      "name": "Blood Rite",
      "image": "/images/abilities/bloodseeker_blood_bath.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Thirst",
      "image": "/images/abilities/bloodseeker_thirst.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Bloodseeker is invigorated by the wounds of his enemies, gaining bonus movement speed when an enemy hero's health falls below 100%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Sanguivore",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Bloodseeker restores some life when he kills a unit, equal to 30 health plus a percentage of the units max health.\n\nRestores for half values if an ally kills a nearby enemy hero.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Rupture",
      "image": "/images/abilities/bloodseeker_rupture.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "75 / 70 / 65"
    }
  ],
  "Crystal Maiden": [
    {
      "name": "Crystal Nova",
      "image": "/images/abilities/crystal_maiden_crystal_nova.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A burst of damaging frost slows enemy movement in the targeted area.",
      "manaCost": "115 / 135 / 155 / 175",
      "cooldown": "11 / 10 / 9 / 8"
    },
    {
      "name": "Frostbite",
      "image": "/images/abilities/crystal_maiden_frostbite.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Encases an enemy unit in ice, prohibiting movement and attack, while dealing damage over time. Deals 4x damage to non-ancient creeps.",
      "manaCost": "125 / 135 / 145 / 155",
      "cooldown": "9 / 8 / 7 / 6"
    },
    {
      "name": "Arcane Aura",
      "image": "/images/abilities/crystal_maiden_brilliance_aura.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Gives mana regeneration to all friendly units on the map. Allies within a 1200 radius of Crystal Maiden receive more mana regeneration.\n\nCrystal Maiden passively gains mana regen amplification.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Crystal Clone",
      "image": "/images/abilities/crystal_maiden_crystal_clone.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Slides in a direction, creating a crystal clone of herself in her place and disjointing incoming projectiles. If the clone takes enough damage or times out, it shatters, Frostbiting enemies in a 450 AoE around its place. The Clone can also be destroyed by Crystal Maiden's own spells.",
      "manaCost": "150",
      "cooldown": "12"
    },
    {
      "name": "Glacial Guard",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "A portion of the mana Crystal Maiden spends on her abilities is converted into a physical barrier.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Freezing Field",
      "image": "/images/abilities/crystal_maiden_freezing_field.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Surrounds Crystal Maiden with 100 random icy explosions that slow enemies and deal massive damage. Lasts 10 seconds.",
      "manaCost": "200 / 400 / 600",
      "cooldown": "100 / 95 / 90"
    },
    {
      "name": "Stop Freezing Field",
      "image": "/images/abilities/crystal_maiden_freezing_field_stop.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Immediately stops the Freezing Field",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Drow Ranger": [
    {
      "name": "Frost Arrows",
      "image": "/images/abilities/drow_ranger_frost_arrows.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Adds a freezing effect to Drow's attacks, slowing enemy movement and dealing bonus damage. Slow lasts 1.5 seconds.",
      "manaCost": "9 / 10 / 11 / 12",
      "cooldown": "0 / 0 / 0 / 0"
    },
    {
      "name": "Gust",
      "image": "/images/abilities/drow_ranger_wave_of_silence.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Releases a wave that silences and knocks back and reveals invisible enemy units. Knockback distance is relative to how close they are to Drow.",
      "manaCost": "55",
      "cooldown": "19 / 17 / 15 / 13"
    },
    {
      "name": "Multishot",
      "image": "/images/abilities/drow_ranger_multishot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Drow releases a flurry of arrows in continuous salvos, hitting enemies for extra damage and applying Frost Arrows. Lasts up to 1.75 seconds.\n\nDrow can move slowly and use items while casting Multishot.",
      "manaCost": "70 / 85 / 100 / 115",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Glacier",
      "image": "/images/abilities/drow_ranger_glacier.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Drow creates a hill of ice beneath her, knocking away nearby enemies. Units on the hill gain flying vision and Drow and her ranged allies gain bonus attack range. Drow gains additional damage while on the Glacier and attacking targets below her.\n\nThe front of the hill obscures vision and cannot be moved through except by Drow. Does not interrupt Multishot when cast.",
      "manaCost": "50",
      "cooldown": "25"
    },
    {
      "name": "Precision Aura",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Grants Drow bonus agility based on Drow's current agility and level. Nearby ranged heroes received 50% of the bonus agility.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Marksmanship",
      "image": "/images/abilities/drow_ranger_marksmanship.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Drow's experiences in battle grant her a chance to launch arrows with incredible accuracy and effectiveness. Pierces through the enemy's defenses, ignoring their base armor. This ability is disabled if there is an enemy hero within 325 range.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Earthshaker": [
    {
      "name": "Fissure",
      "image": "/images/abilities/earthshaker_fissure.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Slams the ground with a mighty totem, creating an impassable ridge of stone while stunning and damaging enemy units along its line.",
      "manaCost": "115 / 120 / 125 / 130",
      "cooldown": "18 / 17 / 16 / 15"
    },
    {
      "name": "Enchant Totem",
      "image": "/images/abilities/earthshaker_enchant_totem.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Empowers Earthshaker's totem, causing it to deal extra damage and have 100 bonus attack range on the next attack.",
      "manaCost": "45 / 55 / 65 / 75",
      "cooldown": "5"
    },
    {
      "name": "Aftershock",
      "image": "/images/abilities/earthshaker_aftershock.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Causes the earth to shake underfoot, adding additional damage and stuns to nearby enemy units when Earthshaker casts his abilities.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Echo Slam",
      "image": "/images/abilities/earthshaker_echo_slam.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Shockwaves travel through the ground, damaging enemy units. Each enemy hit causes an echo to damage nearby units. Real heroes cause two echoes.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "130 / 120 / 110"
    },
    {
      "name": "Slugger",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Enemies killed with Enchant Totem or Earthshaker's other abilities are sent flying, dealing damage to enemies they hit.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Juggernaut": [
    {
      "name": "Blade Fury",
      "image": "/images/abilities/juggernaut_blade_fury.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Causes a bladestorm of destructive force around Juggernaut, rendering him debuff immune with 80% magic resistance and dealing damage every 0.2s to nearby enemy units. Applies a strong dispel at the end of the spin.",
      "manaCost": "110",
      "cooldown": "30 / 26 / 22 / 18"
    },
    {
      "name": "Healing Ward",
      "image": "/images/abilities/juggernaut_healing_ward.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a Healing Ward which heals all nearby allied units, based on their max health. The Healing Ward moves at 325 movement speed after being summoned. Lasts 18 seconds.",
      "manaCost": "120",
      "cooldown": "60"
    },
    {
      "name": "Blade Dance",
      "image": "/images/abilities/juggernaut_blade_dance.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Gives Juggernaut a chance to deal critical damage with Blade Fury and on each attack.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Swiftslash",
      "image": "/images/abilities/juggernaut_swift_slash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Performs a short Omnislash for 1 seconds.",
      "manaCost": "150",
      "cooldown": "25"
    },
    {
      "name": "Bladeform",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Juggernaut gains a stack of Bladeform every 2s that Juggernaut does not take damage. Each stack grants bonus base Agility and Movement Speed. Stacks fade after 2s upon taking any damage.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Omnislash",
      "image": "/images/abilities/juggernaut_omni_slash.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "200 / 275 / 350",
      "cooldown": "120"
    }
  ],
  "Mirana": [
    {
      "name": "Starstorm",
      "image": "/images/abilities/mirana_starfall.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Calls down a wave of meteors to damage nearby enemy units. The closest enemy unit to Mirana in a 675 radius will be struck a second time.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "12 / 12 / 12 / 12"
    },
    {
      "name": "Sacred Arrow",
      "image": "/images/abilities/mirana_arrow.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Fires a long-range arrow with deadly precision, which stuns and damages the first enemy unit it strikes. The stun duration ranges from 0.01 to 2.6 seconds, with bonus damage up to 180 added, based on the distance the arrow travels to its target. Instantly kills the first non-ancient creep it hits.",
      "manaCost": "90",
      "cooldown": "19 / 18 / 17 / 16"
    },
    {
      "name": "Leap",
      "image": "/images/abilities/mirana_leap.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Mirana leaps forward into battle, empowering herself with a ferocious roar that grants bonus attack and movement speed. Speed bonus lasts 5 seconds.",
      "manaCost": "50",
      "cooldown": "0"
    },
    {
      "name": "Celestial Quiver",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "When a charge is available, Mirana's next attack will deal bonus magic damage.\n\nGains a charge every 7 hero levels.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Moonlight Shadow",
      "image": "/images/abilities/mirana_invis.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Turns Mirana and all allied heroes invisible and grants bonus movement speed. Mirana gains bonus outgoing damage during the duration. If a hero is revealed, invisibility will restore after the fade delay as long as Moonlight Shadow's duration has not expired.",
      "manaCost": "125",
      "cooldown": "120 / 110 / 100"
    }
  ],
  "Morphling": [
    {
      "name": "Waveform",
      "image": "/images/abilities/morphling_waveform.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Morphling dissolves into liquid and surges forward, damaging enemy units in his path. Morphling is invulnerable during Waveform.",
      "manaCost": "115",
      "cooldown": "21 / 18 / 15 / 12"
    },
    {
      "name": "Adaptive Strike",
      "image": "/images/abilities/morphling_adaptive_strike_agi.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launches a surge of water toward an enemy unit, stunning them, knocking them back, and dealing base damage plus additional damage based on Morphling's agility times a multiplier. If Morphling's agility is 50% higher than strength, the maximum agility multiplier is used.\n\nKnockback distance and stun duration are based on Morphling's strength. If his strength is 50% higher than his agility, the maximum knockback distance and stun duration is used.",
      "manaCost": "40 / 50 / 60 / 70",
      "cooldown": "17 / 14 / 11 / 8"
    },
    {
      "name": "Ebb and Flow",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Morphling receives bonus cast range and slow resistance based on his current Strength, and attack range and movement speed based on his current Agility. These bonuses persist if he is morphed into another hero.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Attribute Shift (Agility Gain)",
      "image": "/images/abilities/morphling_morph_agi.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Morphling shifts its form, pulling points from Strength and pouring them into Agility at a rate of 4. The process is reversible.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Attribute Shift (Strength Gain)",
      "image": "/images/abilities/morphling_morph_str.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Morphling shifts its form, pulling points from Agility and pouring them into Strength at a rate of 4. The process is reversible.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Morph",
      "image": "/images/abilities/morphling_replicate.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Morphling changes his form to match the targeted enemy, gaining their basic abilities. Can be toggled for the duration of the ability.",
      "manaCost": "50",
      "cooldown": "125 / 90 / 55"
    },
    {
      "name": "Morph Replicate",
      "image": "/images/abilities/morphling_morph_replicate.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Toggles Morphling's form between his own and the replicated enemy.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Shadow Fiend": [
    {
      "name": "Shadowraze",
      "image": "/images/abilities/nevermore_shadowraze1.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Shadow Fiend razes the ground directly in front of him, dealing damage to enemy units in the area, dealing bonus damage based on his current Necromastery Soul amount. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack.",
      "manaCost": "75",
      "cooldown": "9"
    },
    {
      "name": "Shadowraze",
      "image": "/images/abilities/nevermore_shadowraze2.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Shadow Fiend razes the ground a short distance away from him, dealing damage to enemy units in the area, dealing bonus damage based on his current Necromastery Soul amount. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Shadowraze",
      "image": "/images/abilities/nevermore_shadowraze3.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Shadow Fiend razes the ground a longer distance away from him, dealing damage to enemy units in the area, dealing bonus damage based on his current Necromastery Soul amount. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadowraze damage per stack.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Feast of Souls",
      "image": "/images/abilities/nevermore_frenzy.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Shadow Fiend gains Bonus Movement and Attack Speed for 8 seconds. For the duration of the effect, every 0.5s he collects souls from 2 enemies in a 600 radius. After the effect is over, he loses the souls whose owners are still alive, retaining the rest for 8s, after which souls that are over the Necromastery max stack count are also lost.\n\n Can only collect souls once from each individual enemy.",
      "manaCost": "60 / 65 / 70 / 75",
      "cooldown": "21"
    },
    {
      "name": "Presence of the Dark Lord",
      "image": "/images/abilities/nevermore_dark_lord.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Shadow Fiend's presence reduces the armor of nearby enemies.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Requiem of Souls",
      "image": "/images/abilities/nevermore_requiem.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Shadow Fiend gathers up to 20 of his captured souls to release them as lines of demonic energy. Units near Shadow Fiend when the souls are released can be damaged by several lines of energy. Any unit damaged by Requiem of Souls will be feared and have its movement speed and magic resistance reduced for 0.6 seconds for each line hit up to a maximum of 2.15. Lines of energy are created for every soul captured through Necromastery. \n\n Requiem of Souls is automatically cast whenever Shadow Fiend dies, regardless of its cooldown.",
      "manaCost": "150 / 175 / 200",
      "cooldown": "120 / 110 / 100"
    },
    {
      "name": "Necromastery",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Shadow Fiend steals the soul from units he kills, gaining 1.35 bonus damage per soul. Hero kills grant 4 souls. On death, he releases 30% of them from bondage.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Phantom Lancer": [
    {
      "name": "Spirit Lance",
      "image": "/images/abilities/phantom_lancer_spirit_lance.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sends a magical spirit lance to a target enemy unit that damages and slows, while summoning an illusory phantom to attack the unit.",
      "manaCost": "120",
      "cooldown": "10 / 9 / 8 / 7"
    },
    {
      "name": "Doppelganger",
      "image": "/images/abilities/phantom_lancer_doppelwalk.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Phantom Lancer briefly vanishes from the battlefield. After 1 second, Phantom Lancer and any of his nearby illusions reappear at a random position within the targeted location, along with two additional doppelgangers. Extends duration of all illusions. The two added doppelgangers have different properties: one takes normal damage and deals none, while the other takes 500% bonus damage and deals -80% less damage.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "70",
      "cooldown": "22 / 18 / 14 / 10"
    },
    {
      "name": "Phantom Rush",
      "image": "/images/abilities/phantom_lancer_phantom_edge.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "When targeting an enemy for an attack, Phantom Lancer quickly charges into range, gaining increased movement speed and evasion.",
      "manaCost": "0",
      "cooldown": "15 / 11 / 7 / 3"
    },
    {
      "name": "Illusory Armaments",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever an illusion of Phantom Lancer is created, its outgoing damage cannot go below a fixed value for 3 seconds.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Juxtapose",
      "image": "/images/abilities/phantom_lancer_juxtapose.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Phantom Lancer has a chance to fracture his presence on an attack, creating an illusion of himself. Illusions also have a chance to fracture further. Illusions created from Phantom Lancer last for 8 seconds, while illusions created from other illusions last 4 seconds.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Puck": [
    {
      "name": "Illusory Orb",
      "image": "/images/abilities/puck_illusory_orb.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Vector Targeted. Puck launches a magic orb that travels along the path, damaging enemy units along the way. The orb deals an additional 3% of its impact damage every 0.5s in its area of effect, but if it exceeds the max cast range it will be destroyed.\n\n At any point, Puck may teleport to the orb's location using Ethereal Jaunt.\n\n Can be put on alt-cast to launch the Orb straight ahead.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "12 / 11 / 10 / 9"
    },
    {
      "name": "Waning Rift",
      "image": "/images/abilities/puck_waning_rift.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Puck teleports to the target location and releases a burst of faerie dust that deals damage and silences enemy units nearby.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "16 / 15 / 14 / 13"
    },
    {
      "name": "Phase Shift",
      "image": "/images/abilities/puck_phase_shift.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Puck briefly shifts into another dimension where it is immune from harm.",
      "manaCost": "0 / 0 / 0 / 0",
      "cooldown": "8 / 7.5 / 7 / 6.5"
    },
    {
      "name": "Ethereal Jaunt",
      "image": "/images/abilities/puck_ethereal_jaunt.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Teleports Puck to a flying Illusory Orb.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Puckish",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever Puck disjoints an attack, it restores 3% of its max health and mana. Dodging a targeted spell projectile restores 3x that amount. Does not apply to attacks by Towers.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Dream Coil",
      "image": "/images/abilities/puck_dream_coil.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Creates a coil of volatile magic that latches onto enemy Heroes, damaging and leashing them. If the enemy hero stretches the coil by moving too far away, it snaps, stunning and dealing additional damage.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "75"
    }
  ],
  "Pudge": [
    {
      "name": "Meat Hook",
      "image": "/images/abilities/pudge_meat_hook.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launches a bloody hook toward a unit or location. The hook will snag the first unit it encounters, dragging the unit back to Pudge, killing it if it's a non-ancient creep and dealing damage if it is an enemy otherwise.",
      "manaCost": "120",
      "cooldown": "18 / 16 / 14 / 12"
    },
    {
      "name": "Rot",
      "image": "/images/abilities/pudge_rot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A toxic cloud that deals intense damage and slows movement--harming not only enemy units but Pudge himself.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Meat Shield",
      "image": "/images/abilities/pudge_flesh_heap.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Pudge covers himself with a layer of flesh that blocks damage of any type taken from any source.",
      "manaCost": "65 / 70 / 75 / 80",
      "cooldown": "20 / 19 / 18 / 17"
    },
    {
      "name": "Flesh Heap",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Pudge's skin thickens permanently every time he kills an enemy Hero, gaining 1.6 bonus Strength for each stack.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Dismember",
      "image": "/images/abilities/pudge_dismember.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Pudge chows down on an enemy unit, disabling it and dealing damage over time. Damage is increased by Pudge's Strength and heals him for the total amount. Pudge pulls the unit at a rate of 75 units, up to a minimum of 125 range.",
      "manaCost": "100 / 130 / 170",
      "cooldown": "30 / 25 / 20"
    }
  ],
  "Razor": [
    {
      "name": "Plasma Field",
      "image": "/images/abilities/razor_plasma_field.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Releases a wave of energetic plasma that grows in power as it expands, but also zaps on contraction, slowing and dealing damage to enemy units caught in its path. Damage and slow increases with distance from Razor. The Plasma Field hits each unit twice, once each direction.",
      "manaCost": "125",
      "cooldown": "13 / 12 / 11 / 10"
    },
    {
      "name": "Static Link",
      "image": "/images/abilities/razor_static_link.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a charged link between Razor and an enemy Hero, stealing damage from the target and giving it to Razor. Allows Razor to attack while moving with the link active.",
      "manaCost": "65",
      "cooldown": "44 / 36 / 28 / 20"
    },
    {
      "name": "Storm Surge",
      "image": "/images/abilities/razor_storm_surge.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "There's a chance when attacked, and always when targeted with a spell, to release a forked lightning that strikes the target and other nearby enemies, prioritizing the unit type of the attacker, dealing damage and slowing movement speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Unstable Current",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Eye of the Storm",
      "image": "/images/abilities/razor_eye_of_the_storm.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "A powerful lightning storm strikes out at the enemy unit with the lowest health, dealing damage and reducing armor.",
      "manaCost": "100 / 150 / 200",
      "cooldown": "80 / 70 / 60"
    }
  ],
  "Sand King": [
    {
      "name": "Burrowstrike",
      "image": "/images/abilities/sandking_burrowstrike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sand King burrows into the ground and tunnels forward, damaging and stunning enemy units above him as he resurfaces. Adds Caustic Finale poison to heroes hit\n\n Can be put on alt-cast to immediately cast in the desired direction, without walking towards the targeted location.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "Sand Storm",
      "image": "/images/abilities/sandking_sand_storm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sand King creates a fearsome sandstorm that damages enemy units and grants Sand King Invisibility while he is in it. The effect ends when Sand King leaves the area.",
      "manaCost": "85",
      "cooldown": "40 / 34 / 28 / 22"
    },
    {
      "name": "Stinger",
      "image": "/images/abilities/sandking_scorpion_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sand King strikes an area, performing an attack on all enemies in the area of effect, dealing extra damage to each. Enemies within an innermost radius of 125 take 40% extra damage. Applies Caustic Finale and a slow to all enemies hit.",
      "manaCost": "35 / 40 / 45 / 50",
      "cooldown": "15 / 12 / 9 / 6"
    },
    {
      "name": "Caustic Finale",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Sand King's attacks inject a venom that causes enemy units to violently explode when they die that does a flat amount of damage and an additional amount based on the dying units max health.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Epicenter",
      "image": "/images/abilities/sandking_epicenter.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "After a cast point of 2 seconds, Sand King sends a disturbance into the earth, causing it to shudder violently. All enemies caught within range will take damage and become slowed. Each subsequent pulse increases the radius of damage dealt.",
      "manaCost": "150 / 225 / 300",
      "cooldown": "120 / 110 / 100"
    }
  ],
  "Storm Spirit": [
    {
      "name": "Static Remnant",
      "image": "/images/abilities/storm_spirit_static_remnant.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates an explosively charged image of Storm Spirit that walks to the target position and lasts for 12 seconds. Will detonate and deal damage if an enemy unit comes near it.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "3.5"
    },
    {
      "name": "Electric Vortex",
      "image": "/images/abilities/storm_spirit_electric_vortex.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A vortex that pulls an enemy unit to Storm Spirit's location.",
      "manaCost": "60 / 70 / 80 / 90",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Overload",
      "image": "/images/abilities/storm_spirit_overload.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Casting a spell creates an electrical charge, which is released in a burst on Storm's next attack, dealing damage and slowing nearby enemies.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Ball Lightning",
      "image": "/images/abilities/storm_spirit_ball_lightning.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Storm Spirit becomes volatile electricity, charging across the battlefield until he depletes his mana or reaches his target. The activation mana cost is 25+7.5% of his total mana pool, and the cost per 100 units traveled is 10+0.65% of his total mana pool. Damage is expressed in damage per 100 units traveled.",
      "manaCost": "30",
      "cooldown": "0"
    },
    {
      "name": "Galvanized",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Storm Spirit gains a charge of 0.2 mana regeneration per kill. Loses 2 charges per death. Additionally every time he gains a charge he also gains 0.1 Mana Regen permanently.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Sven": [
    {
      "name": "Storm Hammer",
      "image": "/images/abilities/sven_storm_bolt.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sven unleashes his magical gauntlet that deals damage and stuns enemy units in a small area around the target.",
      "manaCost": "110",
      "cooldown": "21 / 18 / 15 / 12"
    },
    {
      "name": "Great Cleave",
      "image": "/images/abilities/sven_great_cleave.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sven strikes with great force, cleaving all nearby enemy units with his attack.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Warcry",
      "image": "/images/abilities/sven_warcry.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sven's Warcry heartens his allied heroes for battle, increasing their armor and movement speed. Lasts 8 seconds.",
      "manaCost": "30 / 35 / 40 / 45",
      "cooldown": "36 / 32 / 28 / 24"
    },
    {
      "name": "God's Strength",
      "image": "/images/abilities/sven_gods_strength.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Sven channels his rogue strength, granting bonus damage and slow resistance for 30 seconds.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "110 / 105 / 100"
    },
    {
      "name": "Wrath of God",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Sven gains additional attack damage from Strength.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Tiny": [
    {
      "name": "Avalanche",
      "image": "/images/abilities/tiny_avalanche.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Bombards an area with rocks, continously doing small intervals of damage and stun to enemy units.",
      "manaCost": "105 / 120 / 135 / 150",
      "cooldown": "23 / 20 / 17 / 14"
    },
    {
      "name": "Toss",
      "image": "/images/abilities/tiny_toss.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Grabs the nearest unit in a 300 radius around Tiny, ally or enemy, and launches it at the target unit or rune to deal damage where they land.",
      "manaCost": "125",
      "cooldown": "20 / 17 / 14 / 11"
    },
    {
      "name": "Tree Grab",
      "image": "/images/abilities/tiny_tree_grab.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Grabs a tree and causes Tiny to have bonus range, damage, and a splashing attack for a limited number of attacks. The tree can be thrown, to deal your attack to a unit at a distance.",
      "manaCost": "40 / 35 / 30 / 25",
      "cooldown": "16 / 13 / 10 / 7"
    },
    {
      "name": "Tree Volley",
      "image": "/images/abilities/tiny_tree_channel.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Tiny channels to throw random trees within range towards the targeted area. Deals Tiny's attack with Tree Throw bonuses.",
      "manaCost": "150",
      "cooldown": "17"
    },
    {
      "name": "Insurmountable",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Tiny gains Status and Slow Resistance from Strength. Slow Resistance also reduces the impact of Attack Speed slows.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Grow",
      "image": "/images/abilities/tiny_grow.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Tiny gains craggy mass, increasing his attack damage, movement speed and armor, and toss power while slowing his attack speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Tree Throw",
      "image": "/images/abilities/tiny_toss_tree.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Throws the tree at the target unit, proccing your attack on it and splashing damage around the target.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Vengeful Spirit": [
    {
      "name": "Magic Missile",
      "image": "/images/abilities/vengefulspirit_magic_missile.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Fires a magic missile at an enemy unit, stunning and dealing damage.",
      "manaCost": "90 / 95 / 100 / 105",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "Wave of Terror",
      "image": "/images/abilities/vengefulspirit_wave_of_terror.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Vengeful Spirit lets loose a wicked cry, weakening the total attack damage and armor of enemies, and giving vision of the path ahead.",
      "manaCost": "40",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Vengeance Aura",
      "image": "/images/abilities/vengefulspirit_command_aura.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Vengeful Spirit's presence increases the damage of nearby friendly heroes. Vengeful Spirit herself receives 20% extra bonus.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Retribution",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Vengeful Spirit is considered both a ranged and a melee attacker to gain the respective bonuses.\n\nWhen killed by an enemy hero, Vengeful Spirit deals 20% bonus damage to her killer until their next death. Only one debuff can exist at a time.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Nether Swap",
      "image": "/images/abilities/vengefulspirit_nether_swap.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Instantaneously swaps positions with a target Hero, friend or enemy. Nether Swap interrupts channeling abilities on the target. Enemy Swapped units take damage. Vengeful Spirit and allied swapped units gain a barrier equal to the damage dealt.",
      "manaCost": "100 / 150 / 200",
      "cooldown": "46 / 38 / 30"
    }
  ],
  "Windranger": [
    {
      "name": "Shackleshot",
      "image": "/images/abilities/windrunner_shackleshot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Shackles the target to an enemy unit or tree in a line directly behind it. If no unit or tree is present, the stun duration is reduced to 0.6.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Powershot",
      "image": "/images/abilities/windrunner_powershot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Windranger charges her bow for up to 1 second for a single powerful shot, which deals more damage the longer it is charged. The arrow damages and slows enemies' movement speed along its path. For each enemy that Powershot hits, its damage and slow is reduced.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "12 / 11 / 10 / 9"
    },
    {
      "name": "Windrun",
      "image": "/images/abilities/windrunner_windrun.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Increases movement speed and adds evasion from all physical attacks.",
      "manaCost": "50",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "Gale Force",
      "image": "/images/abilities/windrunner_gale_force.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Vector Targeted. Summons a strong wind that pushes all enemies in the target area towards the target direction.",
      "manaCost": "125",
      "cooldown": "25"
    },
    {
      "name": "Focus Fire Cancel",
      "image": "/images/abilities/windrunner_focusfire_cancel.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "End your Focus Fire early.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Focus Fire",
      "image": "/images/abilities/windrunner_focusfire.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Windranger channels the wind to gain 0 additional attack speed against a single enemy unit or structure, though with a reduction to her attack damage. Extra damage from secondary item effects is not reduced.",
      "manaCost": "75 / 100 / 125",
      "cooldown": "50 / 40 / 30"
    },
    {
      "name": "Tailwind",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Using an ability conjures a stacking Tailwind that gives Windranger a brief burst of movement speed. Movement speed bonus gradually starts fading halfway through the Tailwind duration.\n\nPassively increases Windranger's max movement speed.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Zeus": [
    {
      "name": "Arc Lightning",
      "image": "/images/abilities/zuus_arc_lightning.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Hurls a bolt of lightning that leaps through nearby enemy units that deal damage.",
      "manaCost": "85 / 90 / 95 / 100",
      "cooldown": "1.6"
    },
    {
      "name": "Lightning Bolt",
      "image": "/images/abilities/zuus_lightning_bolt.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Calls down a bolt of lightning to strike an enemy unit, causing damage and a mini-stun. When cast, Lightning Bolt briefly provides unobstructed vision and True Sight around the target in a 600 radius. Can be cast on the ground, affecting the closest enemy hero in 325 range.",
      "manaCost": "120 / 125 / 130 / 135",
      "cooldown": "6 / 6 / 6 / 6"
    },
    {
      "name": "Heavenly Jump",
      "image": "/images/abilities/zuus_heavenly_jump.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Zeus performs a Heavenly Jump, leaping forward and shocking the closest visible nearby enemy (prioritizing heroes), dealing damage as well as reducing their movement and attack speed. Zeus gets 900 unobstructed vision around him for 3 seconds.",
      "manaCost": "50 / 60 / 70 / 80",
      "cooldown": "26 / 22 / 18 / 14"
    },
    {
      "name": "Nimbus",
      "image": "/images/abilities/zuus_cloud.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a storm cloud anywhere on the map that automatically casts Lightning Bolt on nearby enemies.",
      "manaCost": "275",
      "cooldown": "45"
    },
    {
      "name": "Lightning Hands",
      "image": "/images/abilities/zuus_lightning_hands.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Zeus gains bonus attack speed and his attacks create Arc Lightnings that deal a percentage of its damage. Can be toggled off to stop this effect.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Thundergod's Wrath",
      "image": "/images/abilities/zuus_thundergods_wrath.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Strikes all enemy heroes with a bolt of lightning, dealing damage no matter where they may be. Provides True Sight around each hero before they are struck.",
      "manaCost": "250 / 375 / 500",
      "cooldown": "130"
    },
    {
      "name": "Static Field",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Zeus shocks any enemy that he attacks or is hit by his abilities, causing damage equal to a percentage of their current health.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Kunkka": [
    {
      "name": "Torrent",
      "image": "/images/abilities/kunkka_torrent.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a rising torrent that, after a short delay, hurls enemy units into the sky, stunning, dealing damage and slowing movement speed.",
      "manaCost": "90",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Tidebringer",
      "image": "/images/abilities/kunkka_tidebringer.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Kunkka's legendary sword grants increased damage and cleaves a large area of effect in front of him for a single strike.",
      "manaCost": "0",
      "cooldown": "13 / 10 / 7 / 4"
    },
    {
      "name": "X Marks the Spot",
      "image": "/images/abilities/kunkka_x_marks_the_spot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Targets a friendly or enemy Hero, marks their position with an X, and returns them to it after several seconds. Kunkka can trigger the return at any time during the duration. Lasts twice as long on allied heroes.",
      "manaCost": "50",
      "cooldown": "24 / 20 / 16 / 12"
    },
    {
      "name": "Admiral's Rum",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "50.5"
    },
    {
      "name": "Tidal Wave",
      "image": "/images/abilities/kunkka_tidal_wave.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Releases a Tidal Wave that spawns behind Kunkka. Deals damage and drags enemies along it. Enemies cannot attack while being dragged.",
      "manaCost": "75",
      "cooldown": "12"
    },
    {
      "name": "Ghostship",
      "image": "/images/abilities/kunkka_ghostship.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Summons a ghostly ship that sails through the battle before smashing apart, damaging and stunning all enemies caught near the wreckage.\n\nAllied heroes touched by the Ghostship are given a 2x strong swig of The Admiral's Rum.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "90 / 80 / 70"
    },
    {
      "name": "Return",
      "image": "/images/abilities/kunkka_return.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Returns the marked hero to the X.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Lina": [
    {
      "name": "Dragon Slave",
      "image": "/images/abilities/lina_dragon_slave.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Lina channels the breath of a dragon, sending out a wave of fire that scorches every enemy in its path.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "11 / 10 / 9 / 8"
    },
    {
      "name": "Light Strike Array",
      "image": "/images/abilities/lina_light_strike_array.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a column of flames that damages and stuns enemies.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "13 / 11 / 9 / 7"
    },
    {
      "name": "Fiery Soul",
      "image": "/images/abilities/lina_fiery_soul.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Grants bonus attack and movement speed each time Lina hits an enemy with a spell. Stacks with itself. Lasts 18 seconds.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Flame Cloak",
      "image": "/images/abilities/lina_flame_cloak.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Grants Lina unobstructed movement and increases her spell damage and magic resistance. Grants max fiery soul stacks on activation.",
      "manaCost": "50",
      "cooldown": "25"
    },
    {
      "name": "Slow Burn",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Lina's abilities deal an additional 64% damage as burn damage over 4s.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Laguna Blade",
      "image": "/images/abilities/lina_laguna_blade.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Fires off a bolt of lightning at a single enemy unit, dealing massive damage.",
      "manaCost": "150 / 300 / 450",
      "cooldown": "70 / 60 / 50"
    }
  ],
  "Lion": [
    {
      "name": "Earth Spike",
      "image": "/images/abilities/lion_impale.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Rock spikes burst from the earth along a straight path. Enemy units are hurled into the air, then are stunned and take damage when they fall.",
      "manaCost": "90 / 110 / 130 / 150",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "Hex",
      "image": "/images/abilities/lion_voodoo.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Transforms an enemy unit into a harmless beast, with all special abilities disabled.",
      "manaCost": "110 / 140 / 170 / 200",
      "cooldown": "24 / 20 / 16 / 12"
    },
    {
      "name": "Mana Drain",
      "image": "/images/abilities/lion_mana_drain.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Channels magical energy, taking mana and slowing enemies over time. If the enemy has no mana remaining, the slow is increased by 15%. \n\n Can target allies to give them mana and movement speed at a 50% rate.",
      "manaCost": "0",
      "cooldown": "15 / 12 / 9 / 6"
    },
    {
      "name": "To Hell and Back",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Lion gains 20% debuff duration after killing or assisting in a Hero kill while that Hero is dead.\n\nLion gains 20% spell amplification for 90s after respawning or resurrecting or until he gets a kill or assist.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Finger of Death",
      "image": "/images/abilities/lion_finger_of_death.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Rips at an enemy unit, trying to turn it inside-out, dealing massive damage to the target.\n\nAfter using Finger of Death, Lion's hand becomes empowered, allowing him to use a cleaving melee attack with 250 range with bonus movement speed.\n\nFinger of Death gains permanent bonus damage for it and the fist for each enemy Hero it or the fist kills. \n\nThe melee attack may be disabled by setting the ability to Alt Cast.",
      "manaCost": "200 / 400 / 600",
      "cooldown": "110 / 70 / 30"
    }
  ],
  "Shadow Shaman": [
    {
      "name": "Ether Shock",
      "image": "/images/abilities/shadow_shaman_ether_shock.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a cone of ethereal energy that strikes multiple enemy units.",
      "manaCost": "90 / 105 / 120 / 135",
      "cooldown": "14 / 12 / 10 / 8"
    },
    {
      "name": "Hex",
      "image": "/images/abilities/shadow_shaman_voodoo.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Transforms an enemy unit into a harmless creature, disabling their attacks and abilities.",
      "manaCost": "130 / 150 / 170 / 190",
      "cooldown": "24 / 20 / 16 / 12"
    },
    {
      "name": "Shackles",
      "image": "/images/abilities/shadow_shaman_shackles.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Magically binds an enemy unit so that it cannot move or attack, absorbing their life energy over time.",
      "manaCost": "125 / 140 / 155 / 170",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "Fowl Play",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "When taking lethal damage, Shadow Shaman receives a strong dispel and survives as a 1 HP chicken with increased movement speed. Incoming damage is reduced to zero for a short duration and additional chickens are created to confuse the enemy. Cooldown resets when Shadow Shaman respawns.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "0",
      "cooldown": "120"
    },
    {
      "name": "Urnaconda",
      "image": "/images/abilities/shadow_shaman_urnaconda.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Throw a snake jar at the target location, damaging all enemies in the AoE and creating a Massive Serpent Ward that has 4x the base Serpent Ward damage and health there that lasts 15s.",
      "manaCost": "140",
      "cooldown": "50"
    },
    {
      "name": "Mass Serpent Ward",
      "image": "/images/abilities/shadow_shaman_mass_serpent_ward.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Summons 10 Serpent Wards to attack enemy units and structures. The Wards are immune to magic. Creeps deal half damage to the Serpent Ward.",
      "manaCost": "200 / 350 / 550",
      "cooldown": "110 / 105 / 100"
    }
  ],
  "Slardar": [
    {
      "name": "Guardian Sprint",
      "image": "/images/abilities/slardar_sprint.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Slardar slithers ahead, moving significantly faster and passing through units. Slardar has 100% slow resistance for the first 2.5s. The slow resistance gradually fades over the remaining sprint duration.",
      "manaCost": "25",
      "cooldown": "33 / 28 / 23 / 18"
    },
    {
      "name": "Slithereen Crush",
      "image": "/images/abilities/slardar_slithereen_crush.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Slams the ground, leaving a puddle of water, and stunning and damaging nearby enemy units. After the stun, the affected units are slowed.",
      "manaCost": "100",
      "cooldown": "8.5 / 8 / 7.5 / 7"
    },
    {
      "name": "Bash of the Deep",
      "image": "/images/abilities/slardar_bash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "After 3 attacks, your next attack will bash the target.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Seaborn Sentinel",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Slardar gains bonus movement speed, health regeneration, attack damage, and armor while in a puddle, trail, or river.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Corrosive Haze",
      "image": "/images/abilities/slardar_amplify_damage.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Reduces enemy armor to amplify physical damage and provides True Sight and vision of the targeted unit, revealing invisibility. The enemy unit leaves a trail of water behind it.",
      "manaCost": "25",
      "cooldown": "5"
    }
  ],
  "Tidehunter": [
    {
      "name": "Gush",
      "image": "/images/abilities/tidehunter_gush.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a gush of water to damage an enemy unit, reducing their movement speed and armor.",
      "manaCost": "100",
      "cooldown": "12"
    },
    {
      "name": "Kraken Shell",
      "image": "/images/abilities/tidehunter_kraken_shell.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Thickens Tidehunter's hide to passively block a portion of any incoming physical attack damage. Reduced block amount versus creeps. The hide also removes negative status effects if the damage taken crosses a threshold.\n\nCan be activated to double the block amount at the cost of 40% movement speed. Lasts 4s.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "45",
      "cooldown": "30"
    },
    {
      "name": "Anchor Smash",
      "image": "/images/abilities/tidehunter_anchor_smash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tidehunter swings his mighty anchor to attack and deal bonus damage to nearby enemies and reduce their attack damage. The radius of Anchor Smash is Tidehunter's attack range plus 225 units.",
      "manaCost": "40 / 45 / 50 / 55",
      "cooldown": "7 / 6 / 5 / 4"
    },
    {
      "name": "Dead in the Water",
      "image": "/images/abilities/tidehunter_dead_in_the_water.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tidehunter attaches a heavy anchor to an enemy hero. The hero is leashed while attached to the anchor. Attempting to move more than 350 units away from the anchor forces the hero to 100 move speed, dragging the anchor behind them. The anchor can be destroyed with 4 hero attacks.",
      "manaCost": "110",
      "cooldown": "35"
    },
    {
      "name": "Ravage",
      "image": "/images/abilities/tidehunter_ravage.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Slams the ground, causing tentacles to erupt in all directions, damaging and stunning all nearby enemy units.",
      "manaCost": "125 / 225 / 325",
      "cooldown": "150 / 145 / 140"
    },
    {
      "name": "Leviathan's Catch",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Witch Doctor": [
    {
      "name": "Paralyzing Cask",
      "image": "/images/abilities/witch_doctor_paralyzing_cask.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launches a cask of paralyzing powder that ricochets between enemy units, stunning and damaging those it hits. Damage increases each bounce.",
      "manaCost": "80 / 100 / 120 / 140",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Voodoo Restoration",
      "image": "/images/abilities/witch_doctor_voodoo_restoration.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Witch Doctor focuses his magic to heal nearby allied units, costing Witch Doctor mana every second Voodoo Restoration is active.",
      "manaCost": "25",
      "cooldown": "0 / 0 / 0 / 0"
    },
    {
      "name": "Maledict",
      "image": "/images/abilities/witch_doctor_maledict.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Curses all enemy Heroes and player-controlled units in a small area, causing them to take a set amount of damage each second, as well as bursts of damage every 4 seconds based on how much health they have lost since the curse began.",
      "manaCost": "105 / 110 / 115 / 120",
      "cooldown": "30 / 26 / 22 / 18"
    },
    {
      "name": "Voodoo Switcheroo",
      "image": "/images/abilities/witch_doctor_voodoo_switcheroo.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Turns Witch Doctor into a Death Ward briefly with reduced attack speed. He is hidden during this time.",
      "manaCost": "200",
      "cooldown": "50"
    },
    {
      "name": "Gris-Gris",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Witch Doctor gets a Gris-Gris, an item that cannot be dropped or placed in the backpack. When the owner dies, 100% of the gold lost from death is added to the item, and will be refunded when the item is consumed. The value of the Gris-Gris is increased by 1 every 3s. \n\n Right-click to consume and permanently remove the item.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Death Ward",
      "image": "/images/abilities/witch_doctor_death_ward.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Summons a deadly ward to attack enemy heroes within its attack range. Lasts a maximum of 8 seconds. Death Ward has 50% bonus accuracy.",
      "manaCost": "200 / 200 / 200",
      "cooldown": "100 / 90 / 80"
    }
  ],
  "Lich": [
    {
      "name": "Frost Blast",
      "image": "/images/abilities/lich_frost_nova.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Blasts the target enemy unit with damaging frost, dealing area damage and slowing movement and attack rates for 4 seconds. The primary target receives both base and area damage.",
      "manaCost": "110 / 120 / 130 / 140",
      "cooldown": "7"
    },
    {
      "name": "Frost Shield",
      "image": "/images/abilities/lich_frost_shield.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Applies a magical frost shield around the target, reducing damage from attacks against it. While the shield is active, ice magic will affect nearby enemy units every 1 seconds, dealing minor damage and slowing them.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "30 / 25 / 20 / 15"
    },
    {
      "name": "Sinister Gaze",
      "image": "/images/abilities/lich_sinister_gaze.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Hypnotizes an enemy unit, causing it to move towards a point between the two of you and drains a percentage of its current mana.",
      "manaCost": "25",
      "cooldown": "24 / 22 / 20 / 18"
    },
    {
      "name": "Ice Spire",
      "image": "/images/abilities/lich_ice_spire.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates an Ice Spire at the target spot, slowing enemies around it. Can take 4 hero hits or 8 creep hits and when destroyed it will create a Frost Blast around it.\n\nChain Frost can be cast on the Spire and can bounce to the Spire and damage the spire by 1 hero attack if there are no other enemies in range.\n\nLich can cast Frost Shield on the Spire. Each Frost Shield tick will heal the spire by 1 hero attack.",
      "manaCost": "150",
      "cooldown": "25"
    },
    {
      "name": "Sacrifice",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Sacrifice an allied creep to convert its current health into mana for Lich and give Lich its experience bounty.\n\nBegins the game on cooldown and with no charges.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Chain Frost",
      "image": "/images/abilities/lich_chain_frost.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Releases an orb of frost that bounces between nearby enemy units up to 10 times, slowing and damaging each time it hits. Each bounce increases the damage for the subsequent bounces. Chain Frost lingers on its last target if it fails to bounce and can bounce again if new targets become available.",
      "manaCost": "180 / 300 / 420",
      "cooldown": "100 / 80 / 60"
    }
  ],
  "Riki": [
    {
      "name": "Smoke Screen",
      "image": "/images/abilities/riki_smoke_screen.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Throws down a smoke bomb, silencing enemies and causing them to miss attacks.",
      "manaCost": "75",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Blink Strike",
      "image": "/images/abilities/riki_blink_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Teleports behind the target unit, momentarily slowing them by 100% and attacking them with bonus damage if it is an enemy.",
      "manaCost": "50 / 55 / 60 / 65",
      "cooldown": "13 / 10 / 7 / 4"
    },
    {
      "name": "Tricks of the Trade",
      "image": "/images/abilities/riki_tricks_of_the_trade.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Riki phases out of the world and periodically strikes 2 random enemy units from behind in an area around him. He has fixed attack damage while phased out.",
      "manaCost": "65",
      "cooldown": "21 / 18 / 15 / 12"
    },
    {
      "name": "Backstab",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Every time Riki strikes his enemy from behind, he deals additional bonus damage equal to a multiple of his Agility.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Cloak and Dagger",
      "image": "/images/abilities/riki_backstab.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Riki fades into the shadows, becoming invisible until he attacks. Hero kills and assists grant additional experience.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Enigma": [
    {
      "name": "Malefice",
      "image": "/images/abilities/enigma_malefice.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Focuses Enigma's power on a target, causing it to take damage and become repeatedly stunned for multiple instances. An instance strikes every 2 seconds.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Demonic Summoning",
      "image": "/images/abilities/enigma_demonic_conversion.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons three fragments of Enigma himself at the cost of health. The eidolons health is increased by 3% of Enigma's current health. These eidolons are all under Enigma's control, and repeated successful attacks cause them to multiply. When this happens, the eidolons have their health restored.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "45 / 40 / 35 / 30"
    },
    {
      "name": "Midnight Pulse",
      "image": "/images/abilities/enigma_midnight_pulse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Steeps an area in dark resonance, dealing 5 + a percentage of the enemies current HP as damage.",
      "manaCost": "65 / 90 / 115 / 140",
      "cooldown": "40 / 35 / 30 / 25"
    },
    {
      "name": "Event Horizon",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Units in a 600 radius moving away from Enigma have a movespeed penalty.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Black Hole",
      "image": "/images/abilities/enigma_black_hole.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Summons a vortex that sucks in nearby enemy units. Enemies affected by Black Hole cannot move, attack, or cast spells.",
      "manaCost": "300 / 400 / 500",
      "cooldown": "180 / 170 / 160"
    }
  ],
  "Tinker": [
    {
      "name": "Laser",
      "image": "/images/abilities/tinker_laser.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Fires an intense energy beam, damaging and blinding the target. Blinded targets miss all physical attacks.",
      "manaCost": "95 / 105 / 115 / 125",
      "cooldown": "19 / 18 / 17 / 16"
    },
    {
      "name": "March of the Machines",
      "image": "/images/abilities/tinker_march_of_the_machines.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Enlists an army of robotic minions to destroy enemy units in an area around Tinker.",
      "manaCost": "100 / 120 / 140 / 160",
      "cooldown": "35 / 33 / 31 / 29"
    },
    {
      "name": "Deploy Turrets",
      "image": "/images/abilities/tinker_deploy_turrets.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "100 / 120 / 140 / 160",
      "cooldown": "24 / 22 / 20 / 18"
    },
    {
      "name": "Warp Flare",
      "image": "/images/abilities/tinker_warp_grenade.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Throws a flare towards an enemy, dealing damage, teleporting them away, rooting them and reducing their Cast and Attack Range for 2 seconds.\n\nThe target is teleported further the closer they are to Tinker.",
      "manaCost": "80",
      "cooldown": "15"
    },
    {
      "name": "Keen Conveyance",
      "image": "/images/abilities/tinker_keen_teleport.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Teleport to a target friendly structure. Level 2 allows teleporting to friendly units and Level 3 to friendly heroes.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Rearm",
      "image": "/images/abilities/tinker_rearm.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Resets the cooldown on Tinker's abilities.",
      "manaCost": "100 / 150 / 200",
      "cooldown": "5.5 / 5 / 4.5"
    },
    {
      "name": "Eureka!",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Tinker gains 1% item cooldown reduction per 3 Intelligence, up to a maximum of 60%.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Sniper": [
    {
      "name": "Shrapnel",
      "image": "/images/abilities/sniper_shrapnel.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Consumes a charge to launch a ball of shrapnel that showers the target area in explosive pellets. Enemies are subject to damage and slowed movement. Reveals the targeted area. Shrapnel charges restore every 35 seconds.",
      "manaCost": "75",
      "cooldown": "0"
    },
    {
      "name": "Headshot",
      "image": "/images/abilities/sniper_headshot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sniper increases his accuracy, giving him a chance to deal 20 extra damage and knock back his enemies. Knockback distance increases based on how close the enemy is to Sniper. Headshots briefly slow enemy movement and attack speed by -100%.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Take Aim",
      "image": "/images/abilities/sniper_take_aim.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Passively increases Sniper's attack range by 160.\n\nOn cast, Sniper gains increased vision, Headshot chance, and attack range. Slows you by 65% for the duration and restricts your vision to a frontal cone.",
      "manaCost": "50",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Concussive Grenade",
      "image": "/images/abilities/sniper_concussive_grenade.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launches a grenade at the target area, dealing damage to enemies and knocking them and Sniper back. Enemies affected are disarmed and have their movement slowed after the knockback.",
      "manaCost": "50",
      "cooldown": "10"
    },
    {
      "name": "Keen Scope",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Sniper’s attacks deal bonus damage for every 100 units of distance Sniper is from the target.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Assassinate",
      "image": "/images/abilities/sniper_assassinate.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Sniper locks onto a target enemy unit and, after a short aiming duration, fires a devastating shot that deals Sniper's attack damage plus bonus damage at long range and mini-stuns the target. Whenever Sniper kills an enemy hero, Assassinate is refreshed.",
      "manaCost": "175",
      "cooldown": "20 / 15 / 10"
    }
  ],
  "Necrophos": [
    {
      "name": "Death Pulse",
      "image": "/images/abilities/necrolyte_death_pulse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Necrophos releases a wave of death around him, dealing damage to enemy units and healing allied units.",
      "manaCost": "115 / 130 / 145 / 160",
      "cooldown": "8 / 7 / 6 / 5"
    },
    {
      "name": "Ghost Shroud",
      "image": "/images/abilities/necrolyte_ghost_shroud.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Necrophos slips into the realm that separates the living from the dead. Unable to attack or be attacked, he emits an aura that slows enemies around him. He takes additional magic damage in this form, but his restorative powers are amplified.",
      "manaCost": "75",
      "cooldown": "28 / 24 / 20 / 16"
    },
    {
      "name": "Heartstopper Aura",
      "image": "/images/abilities/necrolyte_heartstopper_aura.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Necrophos stills the hearts of his opponents, causing nearby enemy units to lose a percentage of their max health over time.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Death Seeker",
      "image": "/images/abilities/necrolyte_death_seeker.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Necrophos turns into a large Death Pulse towards the target unit's position. Once it arrives to the location, the Death Pulse spreads towards nearby enemies and allies.",
      "manaCost": "160",
      "cooldown": "19"
    },
    {
      "name": "Sadist",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Necrophos gains stacking regen for 8 seconds for each unit he kills. Hero kills multiply the effect.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Reaper's Scythe",
      "image": "/images/abilities/necrolyte_reapers_scythe.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Stuns the target enemy hero, then deals damage based on how much life it is missing. If Necrophos kills an enemy this way, he'll permanently gain Health and Mana Regen. Any kill under this effect is credited to Necrophos.",
      "manaCost": "250 / 375 / 500",
      "cooldown": "100"
    }
  ],
  "Warlock": [
    {
      "name": "Fatal Bonds",
      "image": "/images/abilities/warlock_fatal_bonds.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Binds several visible enemy units together, causing a percentage of the damage dealt to one of them to be felt by the others.",
      "manaCost": "120 / 130 / 140 / 150",
      "cooldown": "42 / 34 / 26 / 18"
    },
    {
      "name": "Shadow Word",
      "image": "/images/abilities/warlock_shadow_word.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Warlock whispers an incantation, casting a spell on a unit that makes it deal damage to nearby enemy units and heal nearby ally units. Target Unit will also heal or be damaged depending on whether they are ally or enemy.",
      "manaCost": "110 / 120 / 130 / 140",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Upheaval",
      "image": "/images/abilities/warlock_upheaval.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - A powerful slowing and damaging current that grows stronger as it's channeled. Lasts up to 10 seconds. Enemies are slowed for 1 second after leaving the area or the spell ends.",
      "manaCost": "100",
      "cooldown": "45 / 40 / 35 / 30"
    },
    {
      "name": "Eldritch Summoning",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever an enemy unit dies while afflicted by one or more of Warlock's abilities, a minor imp is summoned that lasts for 15 seconds and explodes on death. Imps will automatically seek out nearby units, favoring fatally bonded heroes, and will explode when reaching their prey.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Chaotic Offering",
      "image": "/images/abilities/warlock_rain_of_chaos.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Summons a Golem from the depths, stunning enemies for 0.8 seconds. The Golem lives 60 seconds, takes reduced damage from spells, has increased Slow Resistance, has Permanent Immolation and Flaming Fists on attack.",
      "manaCost": "200 / 400 / 600",
      "cooldown": "165"
    }
  ],
  "Beastmaster": [
    {
      "name": "Wild Axes",
      "image": "/images/abilities/beastmaster_wild_axes.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Beastmaster sends his axes flying and calls them home again, slicing through enemy units and trees along their path. Each axe can hit an enemy once, and amplifies subsequent damage from Beastmaster and his units.",
      "manaCost": "65",
      "cooldown": "8"
    },
    {
      "name": "Summon Razorback",
      "image": "/images/abilities/beastmaster_summon_razorback.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Beastmaster calls forth a Boar to aid in the battlefield. The Boar has a passive poison attack that slows attack and movement speeds.",
      "manaCost": "60",
      "cooldown": "30"
    },
    {
      "name": "Summon Raptors",
      "image": "/images/abilities/beastmaster_summon_raptor.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Beastmaster summons 2 hawks that circle around Beastmaster and dive-bombs at enemies with a base attack rate of every 4s, damaging and rooting them. Attack rate increases with the Hawk's attack speed. Prioritizes heroes. ",
      "manaCost": "50",
      "cooldown": "30"
    },
    {
      "name": "Inner Beast",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Untaps the inner fury of Beastmaster and units he controls, passively increasing their attack speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Drums of Slom",
      "image": "/images/abilities/beastmaster_drums_of_slom.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Attacks from Beastmaster or a nearby unit he controls will cause him bang his drum, dealing damage to nearby units and healing Beastmaster and units under his control for a portion of the damage dealt. Every attack decreases the interval between drum hits down to a minimum of 0.5s between hits after 20 attacks. If no attacks are made, the intervals gradually increase.\n\nUsing Primal Roar counts as 10 attacks.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Primal Roar",
      "image": "/images/abilities/beastmaster_primal_roar.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Beastmaster lets loose a deafening roar that stuns, and shoves open a path to its target. All units in the path of the roar are damaged, while units shoved aside by the roar have their movement and attack speed slowed. Additionally, Beastmaster and his units gain 40% movement speed for 2 seconds.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "90 / 75 / 60"
    }
  ],
  "Queen of Pain": [
    {
      "name": "Shadow Strike",
      "image": "/images/abilities/queenofpain_shadow_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Hurls a poisoned dagger which deals large initial damage, and then deals damage over time. The poisoned unit has its movement speed slowed for 16 seconds. An instance of damage is dealt every 3 seconds.",
      "manaCost": "100 / 105 / 110 / 115",
      "cooldown": "11 / 9 / 7 / 5"
    },
    {
      "name": "Blink",
      "image": "/images/abilities/queenofpain_blink.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Short distance teleportation that allows Queen of Pain to move in and out of combat.",
      "manaCost": "65",
      "cooldown": "12 / 10 / 8 / 6"
    },
    {
      "name": "Scream Of Pain",
      "image": "/images/abilities/queenofpain_scream_of_pain.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "The Queen of Pain lets loose a piercing scream around her, damaging nearby enemies.\n\n25% of the damage dealt to heroes is reflected back to her.",
      "manaCost": "120",
      "cooldown": "7.5 / 7 / 6.5 / 6"
    },
    {
      "name": "Succubus",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "All sources of Spell Lifesteal also apply to Pure Damage. Queen of Pain gains Spell Lifesteal that increases with proximity to her enemies. Lifesteal is at its maximum when the enemy is 150 units or closer to her and at its minimum when the enemy is 800 units or further from her.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Sonic Wave",
      "image": "/images/abilities/queenofpain_sonic_wave.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Creates a gigantic wave of sound in front of Queen of Pain, dealing heavy damage to all enemy units in its wake and pushing them back.",
      "manaCost": "250 / 400 / 550",
      "cooldown": "110 / 95 / 80"
    }
  ],
  "Venomancer": [
    {
      "name": "Venomous Gale",
      "image": "/images/abilities/venomancer_venomous_gale.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launches a ball of venom in a line, poisoning enemy units so that they take both initial damage and damage over time, as well as suffering slowed movement. Venomous Gale deals damage every 3 seconds over its duration.",
      "manaCost": "95 / 105 / 115 / 125",
      "cooldown": "21 / 20 / 19 / 18"
    },
    {
      "name": "Snakebite",
      "image": "/images/abilities/venomancer_snakebite.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Venomancer summons a Spawn of Aktok to sink its fangs into a target, dealing magic damage and applying a toxin that does damage every second. When the target attacks while infected, they take the initial damage again.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Plague Ward",
      "image": "/images/abilities/venomancer_plague_ward.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a plague ward to attack enemy units and structures. The ward is immune to magic. Wards gain the Poison Sting level from Venomancer, dealing 50% of the full damage.",
      "manaCost": "24 / 26 / 28 / 30",
      "cooldown": "5"
    },
    {
      "name": "Poison Sting",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Venomancer's attacks slow enemies and deal damage over time.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Noxious Plague",
      "image": "/images/abilities/venomancer_noxious_plague.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Infects an enemy with a plague that does damage on application then slows the target and deals damage over time based on their maximum health. When the debuff ends for any reason, all debuffs from Venomancer on the initial target and the plague are spread to nearby targets. Additional spreads beyond the first do not deal impact damage.",
      "manaCost": "200 / 250 / 300",
      "cooldown": "100 / 90 / 80"
    }
  ],
  "Faceless Void": [
    {
      "name": "Time Walk",
      "image": "/images/abilities/faceless_void_time_walk.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Rushes to a target location while backtracking any damage taken the last 2 seconds.",
      "manaCost": "40",
      "cooldown": "21 / 16 / 11 / 6"
    },
    {
      "name": "Time Dilation",
      "image": "/images/abilities/faceless_void_time_dilation.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Faceless Void envelops nearby enemies with time dilating fields to slow cooldown progression of their abilities. Each enveloped enemy gains one Time Dilation stack when applied, and one stack per ability they have on cooldown. Each stack deals damage per second and slows movement and attack speed. The duration is paused while affected by Chronosphere.",
      "manaCost": "90",
      "cooldown": "28 / 24 / 20 / 16"
    },
    {
      "name": "Time Lock",
      "image": "/images/abilities/faceless_void_time_lock.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Adds the chance for an attack to lock an enemy unit in time while attacking it a second time.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Reverse Time Walk",
      "image": "/images/abilities/faceless_void_time_walk_reverse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Available for 1.5 seconds after landing Time Walk. If used in this period, you will reverse your time walk back to your previous cast location. Does not affect health or proc scepter hits.",
      "manaCost": "0",
      "cooldown": "0.5"
    },
    {
      "name": "Distortion Field",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Enemy Attack Projectiles targetting Faceless Void or allied heroes within a 1200 radius of him get slowed by 40%, when they get within 500 distance of their target.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Chronosphere",
      "image": "/images/abilities/faceless_void_chronosphere.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Creates a blister in spacetime, trapping all units caught in its sphere of influence and causes you to move very quickly inside it. Only Faceless Void and any units he controls are unaffected. Invisible enemies in the sphere will be revealed.",
      "manaCost": "125 / 200 / 275",
      "cooldown": "155 / 145 / 135"
    }
  ],
  "Wraith King": [
    {
      "name": "Wraithfire Blast",
      "image": "/images/abilities/skeleton_king_hellfire_blast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Wraith King sears an enemy unit with spectral fire, dealing damage and stunning, then dealing damage over time and slowing the target.",
      "manaCost": "95 / 110 / 125 / 140",
      "cooldown": "14 / 12 / 10 / 8"
    },
    {
      "name": "Bone Guard",
      "image": "/images/abilities/skeleton_king_bone_guard.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Gains a Charge for every 2 creeps killed and 2 charges per hero killed. Activate to spend all charges, summoning skeletons that respawn once when killed. Skeletons benefit from Vampiric Spirit's lifesteal.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "42"
    },
    {
      "name": "Mortal Strike",
      "image": "/images/abilities/skeleton_king_mortal_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Wraith King passively deals bonus damage on an attack with a cooldown.",
      "manaCost": "0",
      "cooldown": "5"
    },
    {
      "name": "Vampiric Spirit",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Grants Wraith King Lifesteal. When slain Wraith King turns into a free pathing Wraith with Bonus Attack and Movement Speed for a short duration, delaying his death. Wraith King cannot reincarnate after being a Wraith.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Reincarnation",
      "image": "/images/abilities/skeleton_king_reincarnation.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Wraith King's form regroups after death, allowing him to resurrect when killed in battle. Upon death, enemy units in a 600 radius are slowed. Skeletons spawn and attack each nearby enemy hero. Can be self-cast to kill Wraith King instantly.",
      "manaCost": "220 / 110 / 0",
      "cooldown": "180 / 150 / 120"
    }
  ],
  "Death Prophet": [
    {
      "name": "Crypt Swarm",
      "image": "/images/abilities/death_prophet_carrion_swarm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sends a swarm of winged beasts to savage enemy units in front of Death Prophet.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "9 / 8 / 7 / 6"
    },
    {
      "name": "Silence",
      "image": "/images/abilities/death_prophet_silence.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Fires a projectile that prevents enemy units in a target area from casting spells.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Spirit Siphon",
      "image": "/images/abilities/death_prophet_spirit_siphon.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a spirit link between Death Prophet and an enemy unit, draining health from the enemy.",
      "manaCost": "60",
      "cooldown": "0"
    },
    {
      "name": "Witchcraft",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Exorcism",
      "image": "/images/abilities/death_prophet_exorcism.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Unleashes evil spirits to drain the life of nearby enemy units and structures. Spirits need to return back to Death Prophet in order to attack again. At the end of the spell's duration, Death Prophet is healed in proportion to the damage dealt. Deals 50% damage to buildings. Lasts 40 seconds.",
      "manaCost": "200 / 300 / 400",
      "cooldown": "150"
    }
  ],
  "Phantom Assassin": [
    {
      "name": "Stifling Dagger",
      "image": "/images/abilities/phantom_assassin_stifling_dagger.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Throws a dagger slowing the enemy unit's movement speed, dealing 65+30% of Phantom Assassin's attack damage as physical damage and applying attack effects from items and abilities.",
      "manaCost": "30",
      "cooldown": "6"
    },
    {
      "name": "Phantom Strike",
      "image": "/images/abilities/phantom_assassin_phantom_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Teleports to a unit, friendly or enemy, and grants bonus attack speed while attacking if it's an enemy unit.",
      "manaCost": "35 / 40 / 45 / 50",
      "cooldown": "0.1"
    },
    {
      "name": "Blur",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Phantom Assassin blurs her body, disjointing incoming projectiles, increasing her movement speed, causing her to be impossible to see until she comes near enemy heroes or towers.",
      "manaCost": "50",
      "cooldown": "45"
    },
    {
      "name": "Fan of Knives",
      "image": "/images/abilities/phantom_assassin_fan_of_knives.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Phantom Assassin releases sharp blades around her, dealing a percentage of each victim's max health on impact and applying Break.",
      "manaCost": "80",
      "cooldown": "14"
    },
    {
      "name": "Immaterial",
      "image": "/images/abilities/phantom_assassin_immaterial.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Phantom Assassin focuses inward, increasing her ability to evade enemy attacks. Evasion improves with Phantom Assassin's levels. \n\nStacks diminishingly with other sources of Evasion.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Coup de Grace",
      "image": "/images/abilities/phantom_assassin_coup_de_grace.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Phantom Assassin refines her combat abilities, acquiring a chance of gaining Deadly Focus with each attack. When attacking with Deadly Focus, Phantom Assassin will consume the buff and guarantee a critical hit. Stifling Dagger has a bonus chance to cause Deadly Focus.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Pugna": [
    {
      "name": "Nether Blast",
      "image": "/images/abilities/pugna_nether_blast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "An exploding pulse deals damage to enemies and structures in the area. Deals 65% damage to structures.",
      "manaCost": "100 / 115 / 130 / 145",
      "cooldown": "5"
    },
    {
      "name": "Decrepify",
      "image": "/images/abilities/pugna_decrepify.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A powerful banishing spell that slows a unit and renders it unable to attack or be attacked. Healing on affected allies is increased, while afflicted enemies take extra magic damage instead.",
      "manaCost": "80",
      "cooldown": "16 / 13 / 10 / 7"
    },
    {
      "name": "Nether Ward",
      "image": "/images/abilities/pugna_nether_ward.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Pugna places a Nether Ward at the target location. The ward will fire at any enemy hero who casts a spell dealing base damage plus the damage multiplier of the mana spent by the enemy hero.",
      "manaCost": "80",
      "cooldown": "40"
    },
    {
      "name": "Oblivion Savant",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Pugna can cast spells and use items while channeling.\n\nPugna receives 1.5% spell amplification per destroyed tower.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Life Drain",
      "image": "/images/abilities/pugna_life_drain.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - When cast on an enemy, Pugna drains health from the target enemy unit to heal himself and granting vision over the target.\n\nWhen cast on an ally, Pugna will drain his own health into his ally.",
      "manaCost": "115 / 160 / 205",
      "cooldown": "7"
    }
  ],
  "Templar Assassin": [
    {
      "name": "Refraction",
      "image": "/images/abilities/templar_assassin_refraction.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Templar Assassin becomes highly elusive, gaining a small barrier and bonus to her damage. The damage and avoidance effects are separate, and have a limited number of instances. If a barrier is consumed, a new one is created as long as there are charges left. If an instance of damage would deal more damage than the remaining barrier, all of the damage is absorbed.",
      "manaCost": "95",
      "cooldown": "14"
    },
    {
      "name": "Meld",
      "image": "/images/abilities/templar_assassin_meld.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Templar Assassin conceals herself, becoming invisible as long as she remains still. If Meld's invisibility is broken by attacking an enemy, Lanaya's attack will deal bonus damage to the enemy and reduce their armor for 6 seconds. Bonus damage and armor reductions are applied to all enemies in the Psi Blades split range.",
      "manaCost": "35 / 40 / 45 / 50",
      "cooldown": "11 / 9 / 7 / 5"
    },
    {
      "name": "Psi Blades",
      "image": "/images/abilities/templar_assassin_psi_blades.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Templar Assassin's psi blades slice through the attacked unit, splitting and damaging enemy units directly behind it, while gaining bonus attack range. For each unit it damages, the split damage is reduced by a percentage.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Trap",
      "image": "/images/abilities/templar_assassin_trap.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Springs the trap nearest to Templar Assassin, slowing nearby enemies. \n\nIf the ability is in alt-cast state, springs the trap that is closest to the mouse cursor.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Psionic Projection",
      "image": "/images/abilities/templar_assassin_trap_teleport.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Allows Templar Assassin to teleport to any Psionic Trap after channeling for 2 seconds, detonating it upon arrival as if it was fully charged and instantly dealing 400 bonus damage. Channeling Psionic Projection does not break Meld.",
      "manaCost": "50",
      "cooldown": "10"
    },
    {
      "name": "Psionic Trap",
      "image": "/images/abilities/templar_assassin_psionic_trap.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Templar Assassin places mystical traps that invisibly monitor enemy movement. When sprung at her command, they exert a slowing influence of 20% in a 400 radius. Trap movement slow charges up to 50% after 3.5 seconds. Deals damage after 3.5s.",
      "manaCost": "15 / 15 / 15",
      "cooldown": "11 / 8 / 5"
    },
    {
      "name": "Inner Peace",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "When remaining stationary and not taking damage for 0.25s, Templar Assassin begins meditating, gaining health and mana regeneration, reaching the maximum bonus after 2.05s of meditating.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Viper": [
    {
      "name": "Poison Attack",
      "image": "/images/abilities/viper_poison_attack.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Intensifies Viper's venom, adding an effect to his normal attack that applies a stacking movement speed slow and magic resistance deduction while dealing damage over time. Stacks up to 6 times.",
      "manaCost": "20",
      "cooldown": "0"
    },
    {
      "name": "Nethertoxin",
      "image": "/images/abilities/viper_nethertoxin.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Viper releases a Nethertoxin at the targeted area. Units in that area take an increasing damage over time based on how long they remain in it. Units in it have their attack speed slowed.",
      "manaCost": "70",
      "cooldown": "14"
    },
    {
      "name": "Corrosive Skin",
      "image": "/images/abilities/viper_corrosive_skin.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Viper exudes an infectious toxin that damages and slows the attack speed of any enemy that damages it in a 1200 radius. The acid exudate also increases Viper's resistance to magic.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Nosedive",
      "image": "/images/abilities/viper_nose_dive.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Viper slams into the ground, releasing a Nethertoxin and splattering each enemy in a 500 AoE for 4 seconds with the effect of Corrosive Skin.",
      "manaCost": "75",
      "cooldown": "25"
    },
    {
      "name": "Predator",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Viper Strike",
      "image": "/images/abilities/viper_viper_strike.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Viper slows the targeted enemy unit's movement and attack speed while also disabling their passives and dealing poison damage over time. The slowing effect reduces over the duration of the poison.",
      "manaCost": "100 / 150 / 200",
      "cooldown": "50 / 40 / 30"
    }
  ],
  "Luna": [
    {
      "name": "Lucent Beam",
      "image": "/images/abilities/luna_lucent_beam.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Calls a beam of lunar energy down upon an enemy, damaging and briefly stunning them.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "9 / 8 / 7 / 6"
    },
    {
      "name": "Lunar Orbit",
      "image": "/images/abilities/luna_lunar_orbit.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates 4 glaives that rotate 225 radius around Luna. Any enemy unit that collides with a glaive will take a percentage of Luna's Attack Damage.",
      "manaCost": "65 / 70 / 75 / 80",
      "cooldown": "40 / 35 / 30 / 25"
    },
    {
      "name": "Moon Glaives",
      "image": "/images/abilities/luna_moon_glaive.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Empowers Luna's glaives, causing her attacks to bounce between enemy units. Deals less damage with each bounce.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Lunar Blessing",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Grants attack damage to Luna and nearby allied heroes within 1200 range, with Luna receiving double the attack damage bonuses. At night, Lunar Blessing is global, and Luna is blessed with bonus night vision.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Eclipse",
      "image": "/images/abilities/luna_eclipse.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Showers random nearby enemies with strikes from Luna's current level of Lucent Beam. These beams do not stun their targets, and there is a maximum number of times that a single target can be struck. Also turns day into night for a short time.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "105"
    }
  ],
  "Dragon Knight": [
    {
      "name": "Breathe Fire",
      "image": "/images/abilities/dragon_knight_breathe_fire.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Unleashes a breath of fire in front of Dragon Knight that burns enemies and reduces the damage their attacks deal.",
      "manaCost": "90 / 95 / 100 / 105",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "Dragon Tail",
      "image": "/images/abilities/dragon_knight_dragon_tail.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dragon Knight smites an enemy unit with his shield, stunning and damaging it and units close to it.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Wyrm's Wrath",
      "image": "/images/abilities/dragon_knight_wyrms_wrath.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "The life blood of the Dragon improves Dragon Knight's abilities and items to have increased AoE and causes his attacks to deal additional magic damage to enemy units.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Fireball",
      "image": "/images/abilities/dragon_knight_fireball.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ignites an area, dealing damage over time that lingers on enemies in it. Has reduced cast range when melee.",
      "manaCost": "80",
      "cooldown": "20"
    },
    {
      "name": "Dragon Blood",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "The life blood of the Dragon improves Dragon Knight's health regeneration and armor. \n\nRegen and armor are increased by 50% during Elder Dragon Form.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Elder Dragon Form",
      "image": "/images/abilities/dragon_knight_elder_dragon_form.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Dragon Knight assumes the form of the Elder Dragon, increasing the range of his abilities, gaining bonus movement speed, and a ranged attack with various properties. The Dragon evolves per level. The bonuses are cumulative. \n\nLevel 1 Green: Grants a corrosive damage over time that can also damage buildings.\n\nLevel 2 Red: Grants splash damage to the dragon's attacks.\n\nLevel 3 Blue: Grants a debuff immunity piercing movement and attack frost slow on attack.",
      "manaCost": "50",
      "cooldown": "100"
    }
  ],
  "Dazzle": [
    {
      "name": "Poison Touch",
      "image": "/images/abilities/dazzle_poison_touch.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Releases a cone of poison that strikes multiple enemy units. Deals damage over time and slows the targets. Anytime the targets get attacked by Dazzle, the debuff duration is refreshed and slow is increased.",
      "manaCost": "125 / 130 / 135 / 140",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Shallow Grave",
      "image": "/images/abilities/dazzle_shallow_grave.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "An ally blessed with Shallow Grave, no matter how close to death, cannot die while under its protection. Healing on that ally is also amplified for the duration based on the hero's HP.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "30 / 26 / 22 / 18"
    },
    {
      "name": "Shadow Wave",
      "image": "/images/abilities/dazzle_shadow_wave.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sends out a bolt of power that arcs between allies, healing them while damaging any enemy units standing nearby. Dazzle is always healed by Shadow Wave.",
      "manaCost": "90",
      "cooldown": "10 / 9 / 8 / 7"
    },
    {
      "name": "Weave",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Dazzle's abilities apply Weave to both allies and enemies they affect, increasing allied armor and reducing enemy armor. Multiple instances of this effect stack.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Nothl Projection",
      "image": "/images/abilities/dazzle_nothl_projection.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Dazzle departs his body, traveling through the Nothl Realm as an invulnerable spirit that can cast spells, attack, and use items, leaving his body behind in the world with a visible tether. While active, Dazzle's basic abilities are empowered: Poison Touch hexes enemies, Shallow Grave heals upon expiration, and Shadow Wave has a shorter cooldown. The effect can be ended early, and Dazzle returns to the body at the end.",
      "manaCost": "100 / 150 / 200",
      "cooldown": "70 / 60 / 50"
    },
    {
      "name": "End Projection",
      "image": "/images/abilities/dazzle_nothl_projection_end.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ends Dazzle's sojourn in the Nothl Realm and returns his spirit to his body.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Clockwerk": [
    {
      "name": "Battery Assault",
      "image": "/images/abilities/rattletrap_battery_assault.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Discharges high-powered shrapnel at random nearby enemy units, dealing minor magical damage and ministun.",
      "manaCost": "75 / 80 / 85 / 90",
      "cooldown": "24 / 22 / 20 / 18"
    },
    {
      "name": "Power Cogs",
      "image": "/images/abilities/rattletrap_power_cogs.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Forms a ring of energized cogs around Clockwerk, trapping any units that are near. Enemies outside the trap that touch a cog are knocked back, losing health and mana. Once a cog has delivered a shock, it will power down. Damage is increased by 50% of the mana burned.\n\n Cogs can be destroyed by enemy attacks, but Clockwerk can push them up to 1000 distance away with one hit. Clockwerk can move through the cogs freely, disabling them as he passes over.",
      "manaCost": "90",
      "cooldown": "21 / 19 / 17 / 15"
    },
    {
      "name": "Rocket Flare",
      "image": "/images/abilities/rattletrap_rocket_flare.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Fires a global range flare that explodes over a given area. Upon impact, enemies in the area take damage and are briefly slowed. Rocket flare provides vision over the impact area for 6 seconds.",
      "manaCost": "35 / 40 / 45 / 50",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Overclocking",
      "image": "/images/abilities/rattletrap_overclocking.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Supercharges Clockwerks abilities:\n\nBattery Assault: Increased radius and affects all enemies in its range.\nPower Cogs: Radius increased, and Clockwerk's armor while near Power Cogs is increased.\nRocket Flares: Increased damage, vision and slow duration, and fire additional rockets to either side of the target.\nHookshot: Stun radius and duration increased.\nJetpack Moves faster.\n\nClockwerk's movement and attack speed becomes slowed to a crawl after the duration runs out.",
      "manaCost": "90",
      "cooldown": "50"
    },
    {
      "name": "Jetpack",
      "image": "/images/abilities/rattletrap_jetpack.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Clockwerk activates a jetpack, gaining flying movement, flying vision, and bonus movement speed. Clockwerk has a severely-limited turn rate during this time and cannot attack. Jetpack can be toggled on and off for the duration of the buff.",
      "manaCost": "75",
      "cooldown": "16"
    },
    {
      "name": "Hookshot",
      "image": "/images/abilities/rattletrap_hookshot.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Fires a grappling device rapidly at the target location. If the hook hits a unit, Clockwerk launches himself into the target, stunning and dealing damage to everyone in a 175 radius around the hit target. Any enemies Clockwerk collides with along the way are damaged and stunned.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "60 / 45 / 30"
    },
    {
      "name": "Armor Power",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Clockwerk's outgoing damage increases by 0.25% per point of armor.\n\nClockwerk can consume Chainmails to permanently gain +4 armor per Chainmail consumed. Can stack. Self-cast to consume.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Jetpack Toggle",
      "image": "/images/abilities/rattletrap_jetpack_toggle.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Toggles Jetpack on and off.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Leshrac": [
    {
      "name": "Split Earth",
      "image": "/images/abilities/leshrac_split_earth.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Splits the earth under enemies. Deals damage and stuns for a short duration.",
      "manaCost": "80 / 100 / 120 / 140",
      "cooldown": "11"
    },
    {
      "name": "Diabolic Edict",
      "image": "/images/abilities/leshrac_diabolic_edict.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Saturates the area around Leshrac with magical explosions that deal pure damage to enemy units and buildings. The fewer units available to attack, the more damage those units will take.",
      "manaCost": "90 / 120 / 150 / 180",
      "cooldown": "22 / 21 / 20 / 19"
    },
    {
      "name": "Lightning Storm",
      "image": "/images/abilities/leshrac_lightning_storm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a lightning storm that blasts the target enemy unit, then strikes any nearby enemy units. Struck enemies have their move speed slowed.",
      "manaCost": "80 / 100 / 120 / 140",
      "cooldown": "4"
    },
    {
      "name": "Nihilism",
      "image": "/images/abilities/leshrac_greater_lightning_storm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Causes Leshrac and all nearby enemies to turn ethereal, preventing them from attacking, slowing them, and making them take more magic damage. Increases Leshrac's speed rather than reducing it. Does not cause Leshrac to take amplified damage.",
      "manaCost": "75",
      "cooldown": "25"
    },
    {
      "name": "Defilement",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Pulse Nova",
      "image": "/images/abilities/leshrac_pulse_nova.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Creates waves of damaging energy around Leshrac, one per second, to damage nearby enemy units. Drains Leshrac's mana with each pulse.",
      "manaCost": "50 / 60 / 70",
      "cooldown": "1 / 1 / 1 / 1"
    }
  ],
  "Nature's Prophet": [
    {
      "name": "Sprout",
      "image": "/images/abilities/furion_sprout.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sprouts a ring of trees around a unit, damaging and trapping it in place and providing vision in a 400 radius.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "14 / 12 / 10 / 8"
    },
    {
      "name": "Teleportation",
      "image": "/images/abilities/furion_teleportation.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Teleports to any point on the map. Gains a barrier after arriving to its destination.",
      "manaCost": "50 / 60 / 70 / 80",
      "cooldown": "65 / 50 / 35 / 20"
    },
    {
      "name": "Nature's Call",
      "image": "/images/abilities/furion_force_of_nature.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Converts an area of trees into Treants under the command of Nature's Prophet.",
      "manaCost": "85 / 90 / 95 / 100",
      "cooldown": "45 / 40 / 35 / 30"
    },
    {
      "name": "Curse of the Oldgrowth",
      "image": "/images/abilities/furion_curse_of_the_forest.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Applies a curse on all enemy heroes within 900 range, displaying them in fog, slowing them, and dealing damage over time based on the number of trees within 250 radius. Treants count as trees for this purpose.",
      "manaCost": "80",
      "cooldown": "18"
    },
    {
      "name": "Spirit of the Forest",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Nature's Prophet gains 2% bonus damage for each nearby tree. Treants also provide this bonus with multiplied values and with larger radius. Treants also possess this ability.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Wrath of Nature",
      "image": "/images/abilities/furion_wrath_of_nature.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Damaging energy bounces around the map, striking enemies that are in vision starting with those closest to the cast point. Each enemy hit beyond the first adds damage, up to the maximum after 16 are hit.",
      "manaCost": "130 / 160 / 190",
      "cooldown": "85"
    }
  ],
  "Lifestealer": [
    {
      "name": "Rage",
      "image": "/images/abilities/life_stealer_rage.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launch into a maddened rage, becoming Debuff Immune, increasing magic resistance and gaining movement speed.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "80 / 100 / 120 / 140",
      "cooldown": "21 / 20 / 19 / 18"
    },
    {
      "name": "Open Wounds",
      "image": "/images/abilities/life_stealer_open_wounds.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Lifestealer rends an enemy unit, slowing the victim's movement speed and allowing all allies to regain health for a percentage of the damage they deal to that unit. The victim recovers movement speed over the duration.",
      "manaCost": "90",
      "cooldown": "30 / 25 / 20 / 15"
    },
    {
      "name": "Feast",
      "image": "/images/abilities/life_stealer_feast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Lifestealer's attacks deal damage and provide heal for a percentage of his target's max health. He gains permanent max HP whenever he kills a unit.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Ghoul Frenzy",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Passively grants Lifestealer Attack Speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Infest",
      "image": "/images/abilities/life_stealer_infest.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Lifestealer infests the body of a target unit, becoming undetectable, and healing for a portion of his max hitpoints every second while inside. He can then explode from the host body, dealing damage to nearby enemies. If the infested unit is an enemy creep or a neutral creep, he can take control of the unit's ability to move and attack, and the creep loses a portion of their max hitpoints over time. Does not work on enemy heroes.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "100 / 125 / 150",
      "cooldown": "80 / 65 / 50"
    },
    {
      "name": "Consume",
      "image": "/images/abilities/life_stealer_consume.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Lifestealer eats the host body from the inside out, exploding from within.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Dark Seer": [
    {
      "name": "Vacuum",
      "image": "/images/abilities/dark_seer_vacuum.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dark Seer creates a vacuum over the target area that sucks in enemy units, disrupting them and dealing damage.",
      "manaCost": "60 / 90 / 120 / 150",
      "cooldown": "60 / 50 / 40 / 30"
    },
    {
      "name": "Ion Shell",
      "image": "/images/abilities/dark_seer_ion_shell.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Surrounds the target unit with a bristling shield that damages enemy units in an area around it.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "9 / 9 / 9 / 9"
    },
    {
      "name": "Surge",
      "image": "/images/abilities/dark_seer_surge.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Charges a target friendly unit with power, giving it a brief burst of phased movement speed. Allows the unit to reach maximum movement speed and cannot be slowed.",
      "manaCost": "50",
      "cooldown": "24 / 19 / 14 / 9"
    },
    {
      "name": "Normal Punch",
      "image": "/images/abilities/dark_seer_normal_punch.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Passive ability. Causes Dark Seer's next attack on a hero to have True Strike, knock a replica out of the victim, damaging and stunning them based on how far Dark Seer has moved in the past 3 seconds. Max power is reached after 1100 distance moved.",
      "manaCost": "0",
      "cooldown": "10"
    },
    {
      "name": "Quick Wit",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Dark Seer gains 1 Attack Speed from each point of Intelligence.\n\nWhen Dark Seer levels up, he restores a percentage of his max health and mana.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Wall of Replica",
      "image": "/images/abilities/dark_seer_wall_of_replica.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Raises a wall of warping light that slows, damages, and creates replicas of any enemy hero who crosses it. Enemy replicas serve at the Dark Seer's will. Replicas last until they are destroyed, or until the wall's duration ends.",
      "manaCost": "125 / 250 / 375",
      "cooldown": "100 / 100 / 100"
    }
  ],
  "Clinkz": [
    {
      "name": "Strafe",
      "image": "/images/abilities/clinkz_strafe.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Clinkz gains attack speed and has bonus attack range. Any current Skeleton Archers within a 1200 radius of Clinkz also gain bonus attack range and 40% of the attack speed bonus. \n\n Casting Strafe does not break Skeleton Walk invisibility.",
      "manaCost": "60 / 70 / 80 / 90",
      "cooldown": "30 / 25 / 20 / 15"
    },
    {
      "name": "Searing Arrows",
      "image": "/images/abilities/clinkz_searing_arrows.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Imbues Clinkz's arrows with fire for extra damage.\n\nSkeleton Archers will fire Searing Arrows at targets Clinkz attacks for 50% damage.",
      "manaCost": "10",
      "cooldown": "0 / 0 / 0 / 0"
    },
    {
      "name": "Death Pact",
      "image": "/images/abilities/clinkz_death_pact.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Clinkz consumes the target enemy creep or friendly Skeleton Archer, healing and gaining max health. Does not take Clinkz out of Skeleton Walk.",
      "manaCost": "50",
      "cooldown": "0"
    },
    {
      "name": "Burning Barrage",
      "image": "/images/abilities/clinkz_burning_barrage.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Clinkz channels and shoots multiple piercing arrows in the target direction that hit all enemy units dealing a percentage of Clinkz' attack damage and applying attack modifiers.",
      "manaCost": "40",
      "cooldown": "17"
    },
    {
      "name": "Burning Army",
      "image": "/images/abilities/clinkz_burning_army.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a row of Burning Skeleton Archers in the target location.",
      "manaCost": "150",
      "cooldown": "70"
    },
    {
      "name": "Skeleton Walk",
      "image": "/images/abilities/clinkz_wind_walk.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Clinkz moves invisibly through units until the moment he attacks or uses items. Leaving Skeleton Walk creates Skeleton Archers.\n\nSkeleton Archers are immobile and die within multiple attacks from a hero or tower. Skeleton Archers deal a percentage of Clinkz' damage, and deal 75% less damage to buildings. Attack range is equal to Clinkz' attack range.",
      "manaCost": "80 / 105 / 130",
      "cooldown": "24 / 21 / 18"
    },
    {
      "name": "Infernal Shred",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Clinkz and his skeletons apply a stacking debuff that causes their attacks to pierce up to 20% of the target's total physical armor (does not reduce their armor). Clinkz applies 3% per attack, and skeletons apply 1%. \n\nLasts 5 seconds.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Omniknight": [
    {
      "name": "Purification",
      "image": "/images/abilities/omniknight_purification.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Instantly heals a friendly unit and damages all nearby enemy units.",
      "manaCost": "90 / 105 / 120 / 135",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Repel",
      "image": "/images/abilities/omniknight_martyr.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Grants Debuff Immunity with 60% magic resistance, as well as bonus HP Regen.",
      "manaCost": "90 / 105 / 120 / 135",
      "cooldown": "40 / 35 / 30 / 25"
    },
    {
      "name": "Hammer of Purity",
      "image": "/images/abilities/omniknight_hammer_of_purity.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Omniknight imbues his hammer with holy power, causing his attack to have increased range, deal pure damage based on a percentage of his base damage and slow his target for a short duration.\n\n Omniknight heals for 30% of the damage dealt over 5s.",
      "manaCost": "0 / 0 / 0 / 0",
      "cooldown": "13 / 10 / 7 / 4"
    },
    {
      "name": "Degen Aura",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Degenerates the movement capabilities of enemy units that stray too near, slowing their movement speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Guardian Angel",
      "image": "/images/abilities/omniknight_guardian_angel.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Omniknight calls upon a Guardian Angel that grants immunity from physical damage to all allied units near Omniknight.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "100 / 90 / 80"
    }
  ],
  "Enchantress": [
    {
      "name": "Impetus",
      "image": "/images/abilities/enchantress_impetus.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Places an enchantment on each attack while activated, causing it to deal additional damage based on how far away the target is. The farther the target, the greater the damage dealt. Deals double damage to illusions.",
      "manaCost": "40 / 45 / 50 / 55",
      "cooldown": "6 / 4 / 2 / 0"
    },
    {
      "name": "Enchant",
      "image": "/images/abilities/enchantress_enchant.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Enchantress charms an enemy. If the enemy is a hero, they are dispelled and slowed for 3.5s, and Enchantress and her units gain bonus attack range against the target.\n\n If the enemy is a creep, she brings it under her control and receives 40% of their experience bounty. Enchantress can control creeps for up to 30s. \n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "70",
      "cooldown": "30 / 24 / 18 / 12"
    },
    {
      "name": "Nature's Attendants",
      "image": "/images/abilities/enchantress_natures_attendants.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A cloud of wisps heals Enchantress and any friendly units nearby.",
      "manaCost": "140",
      "cooldown": "35"
    },
    {
      "name": "Sproink",
      "image": "/images/abilities/enchantress_bunny_hop.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Leaps backward, dodges incoming projectiles, and launches an Impetus attack on the 2 furthest enemy units within Enchantress' attack range + 100.",
      "manaCost": "60",
      "cooldown": "10"
    },
    {
      "name": "Little Friends",
      "image": "/images/abilities/enchantress_little_friends.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Enchantress roots an enemy unit. All creeps, ally, enemy and neutral within a radius will gain bonus movement and attack speed and attack the chosen target for 6 seconds.",
      "manaCost": "75",
      "cooldown": "20"
    },
    {
      "name": "Untouchable",
      "image": "/images/abilities/enchantress_untouchable.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Enchantress beguiles her enemies, slowing their attacks when she is attacked.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Rabble-Rouser",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Enchantress causes neutral creeps or any unit under her control to deal additional damage to enemy Heroes.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Huskar": [
    {
      "name": "Inner Fire",
      "image": "/images/abilities/huskar_inner_fire.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "In a fiery rage, knocks all nearby enemies away from you to a fixed distance, dealing damage and silencing them.",
      "manaCost": "0",
      "cooldown": "17 / 15 / 13 / 11"
    },
    {
      "name": "Burning Spear",
      "image": "/images/abilities/huskar_burning_spear.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Huskar sets his spears aflame, dealing damage over time with his regular attack. Multiple attacks will stack additional damage. Each attack drains some of Huskar's health.",
      "manaCost": "0 / 0 / 0 / 0",
      "cooldown": "0 / 0 / 0 / 0"
    },
    {
      "name": "Berserker's Blood",
      "image": "/images/abilities/huskar_berserkers_blood.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Huskar's injuries feed his power, giving increased attack speed, magic resistance and health regen based on missing health. Health regen is a percentage of your strength.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Blood Magic",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Huskar does not have mana. Mana costs of items are converted into health costs.Huskar's Health Costs are Magical Damage and can be reduced by Magic Resist.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Life Break",
      "image": "/images/abilities/huskar_life_break.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Huskar draws upon his health to break an enemy's life, leaping at a target to shatter a percentage of that hero's current health and slow both their movement and attack speed. While leaping, Huskar is Debuff Immune with 60% magic resistance.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "0 / 0 / 0",
      "cooldown": "16 / 14 / 12"
    }
  ],
  "Night Stalker": [
    {
      "name": "Void",
      "image": "/images/abilities/night_stalker_void.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a damaging void that slows an enemy unit and deals damage. At night, Void also mini-stuns, interrupting channeling abilities, and its effects lasts longer.",
      "manaCost": "90 / 95 / 100 / 105",
      "cooldown": "11 / 10 / 9 / 8"
    },
    {
      "name": "Crippling Fear",
      "image": "/images/abilities/night_stalker_crippling_fear.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Night Stalker horrifies all nearby enemies, causing them to become silenced and take damage over time while near him. The effect lasts longer at night.",
      "manaCost": "50",
      "cooldown": "30 / 25 / 20 / 15"
    },
    {
      "name": "Midnight Feast",
      "image": "/images/abilities/night_stalker_midnight_feast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "39 / 36 / 33 / 30"
    },
    {
      "name": "Hunter in the Night",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Night Stalker is in his element at night, attacking and moving with great swiftness.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Dark Ascension",
      "image": "/images/abilities/night_stalker_darkness.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Night Stalker smothers the sun and summons instant darkness, so that he might use his powers at their fullest. Night Stalker gains flight and bonus damage during this time. Has unobstructed vision.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "140 / 135 / 130"
    }
  ],
  "Broodmother": [
    {
      "name": "Insatiable Hunger",
      "image": "/images/abilities/broodmother_insatiable_hunger.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A violent lust for vital fluids increases Broodmother's attack damage and gives her and her Spiderlings a vampiric attack.",
      "manaCost": "70",
      "cooldown": "45 / 40 / 35 / 30"
    },
    {
      "name": "Spin Web",
      "image": "/images/abilities/broodmother_spin_web.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spins a large web that grants Broodmother a passive movement speed increase and increases her Turn Rate, while in its vicinity, as well as giving free movement.\n\nSpin Web can be cast from anywhere as long as the new web touches an existing web. Webs never expire, and can be manually destroyed. When the maximum limit of webs is exceeded, the oldest web disappears.",
      "manaCost": "40",
      "cooldown": "0"
    },
    {
      "name": "Incapacitating Bite",
      "image": "/images/abilities/broodmother_incapacitating_bite.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Broodmother's venom cripples enemy units, causing her attacks to slow and giving the affected unit a chance to miss its attacks and extra damage from attacks.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Spinner's Snare",
      "image": "/images/abilities/broodmother_sticky_snare.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "70",
      "cooldown": "0"
    },
    {
      "name": "Spider's Milk",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever Broodmother kills a unit, she and all units under her control in a 600 radius receive a buff for 3s that heals them for a percentage of the victim's health every 0.5 seconds. Healing from creeps is reduced by 40%.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Spawn Spiderlings",
      "image": "/images/abilities/broodmother_spawn_spiderlings.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Broodmother injects her young into an enemy unit, dealing damage and slowing them for 4 seconds. The spiderlings will hatch if the target is killed while under this influence.",
      "manaCost": "100",
      "cooldown": "9 / 8 / 7"
    }
  ],
  "Bounty Hunter": [
    {
      "name": "Shuriken Toss",
      "image": "/images/abilities/bounty_hunter_shuriken_toss.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Hurls a deadly shuriken at an enemy unit, dealing damage and slowing the target's movement speed. The shuriken will bounce to any Tracked units who are within a 1200 radius of each other.",
      "manaCost": "75 / 85 / 95 / 105",
      "cooldown": "5"
    },
    {
      "name": "Jinada",
      "image": "/images/abilities/bounty_hunter_jinada.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Bounty Hunter plans his next hit, dealing bonus damage and stealing some unreliable gold.",
      "manaCost": "0",
      "cooldown": "9 / 7 / 5 / 3"
    },
    {
      "name": "Shadow Walk",
      "image": "/images/abilities/bounty_hunter_wind_walk.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Bounty Hunter becomes invisible and gains bonus movement speed and the ability to move through other units until he attacks or casts a spell. If he breaks the invisibility with an attack, that attack will stun the target for a short duration.",
      "manaCost": "50",
      "cooldown": "18 / 17 / 16 / 15"
    },
    {
      "name": "Friendly Shadow",
      "image": "/images/abilities/bounty_hunter_wind_walk_ally.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Applies Shadow Walk and all of its bonuses to the target ally. Allied fade time is 0.5s. Does not break Bounty Hunter's invisibility when cast.",
      "manaCost": "50",
      "cooldown": "15"
    },
    {
      "name": "Big Game Hunter",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Bounty Hunter receives 15% more kill and assist gold if the dying enemy hero is Big Game. An enemy hero is considered Big Game if they are one of the top 3 net worth heroes on the enemy team.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Track",
      "image": "/images/abilities/bounty_hunter_track.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Tracks an enemy hero, granting True Sight of the target, increasing the damage they take and providing information on how much gold it is carrying. If the target dies, Bounty Hunter and nearby heroes collect a bonus bounty of gold. Casting Track does not take you out of invisibility.",
      "manaCost": "50",
      "cooldown": "6 / 5 / 4"
    }
  ],
  "Weaver": [
    {
      "name": "The Swarm",
      "image": "/images/abilities/weaver_the_swarm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Weaver launches a swarm of 12 young Weavers that latch on any enemy unit in their path, attacking and reducing armor until it is killed.",
      "manaCost": "110 / 105 / 100 / 95",
      "cooldown": "44 / 36 / 28 / 20"
    },
    {
      "name": "Shukuchi",
      "image": "/images/abilities/weaver_shukuchi.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Weaver shifts out of visibility, gaining max movement speed and doing harm to any enemies it passes through.",
      "manaCost": "65",
      "cooldown": "15 / 12 / 9 / 6"
    },
    {
      "name": "Geminate Attack",
      "image": "/images/abilities/weaver_geminate_attack.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Allows Weaver to dispatch two attacks at once.",
      "manaCost": "0",
      "cooldown": "9 / 7 / 5 / 3"
    },
    {
      "name": "Time Lapse",
      "image": "/images/abilities/weaver_time_lapse.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Weaver warps backward to whatever position it was in five seconds earlier--regaining the HP and mana from that time. No effect on cooldown, gold or experience.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "150 / 75 / 0",
      "cooldown": "70 / 55 / 40"
    },
    {
      "name": "Threads of Fate",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever Weaver deals damage to an enemy hero with an attack or ability, if he remains within 700 range of them for 1.5s, he establishes a Thread of Fate that briefly slows the enemy and ties Weaver and the enemy together. Each established thread of fate grants bonus damage to Weaver.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Jakiro": [
    {
      "name": "Dual Breath",
      "image": "/images/abilities/jakiro_dual_breath.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "An icy blast followed by a wave of fire launches out in a path in front of Jakiro. The ice slows enemies, while the fire delivers damage over time.",
      "manaCost": "135 / 150 / 165 / 180",
      "cooldown": "12 / 11 / 10 / 9"
    },
    {
      "name": "Ice Path",
      "image": "/images/abilities/jakiro_ice_path.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a path of ice that stuns and damages enemies that touch it.",
      "manaCost": "100",
      "cooldown": "20 / 17 / 14 / 11"
    },
    {
      "name": "Liquid Fire",
      "image": "/images/abilities/jakiro_liquid_fire.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Jakiro burns his enemies in an area of effect with fire added to his attack, while slowing their attacks. Shares a cooldown with Liquid Frost.",
      "manaCost": "20",
      "cooldown": "13 / 10 / 7 / 4"
    },
    {
      "name": "Liquid Frost",
      "image": "/images/abilities/jakiro_liquid_ice.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Jakiro chill his enemies with ice added to his attack, slowing movement for 5 seconds and increasing damage taken from Jakiro's attacks and abilities. This effect does not apply to buildings. Shares a cooldown with Liquid Fire.",
      "manaCost": "20",
      "cooldown": "13 / 10 / 7 / 4"
    },
    {
      "name": "Double Trouble",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Jakiro's attacks launch an attack from each head, but deal less damage each.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Macropyre",
      "image": "/images/abilities/jakiro_macropyre.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Jakiro exhales a wide line of lasting flames, which deals damage per second to any enemy units caught in the fire.",
      "manaCost": "225 / 325 / 425",
      "cooldown": "90 / 80 / 70"
    }
  ],
  "Batrider": [
    {
      "name": "Sticky Napalm",
      "image": "/images/abilities/batrider_sticky_napalm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Drenches an area in sticky oil, amplifying damage from Batrider's attacks and abilities and slowing the movement speed and turn rate of enemies. Additional casts of Sticky Napalm continue to increase damage, up to 20 stacks. Applies a small amount of damage with each cast.",
      "manaCost": "22",
      "cooldown": "3"
    },
    {
      "name": "Flamebreak",
      "image": "/images/abilities/batrider_flamebreak.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Hurls an explosive cocktail that explodes when it reaches the target location, knocking back, slowing and dealing damage over time to enemies in the area.",
      "manaCost": "110",
      "cooldown": "22 / 19 / 16 / 13"
    },
    {
      "name": "Firefly",
      "image": "/images/abilities/batrider_firefly.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Batrider takes to the skies, moving increasingly fast and laying down a trail of flames from the air. The fire damages any enemies it touches and destroys trees below Batrider. Maximum movement speed bonus is reached at the end of Firefly's duration.",
      "manaCost": "100",
      "cooldown": "48 / 42 / 36 / 30"
    },
    {
      "name": "APPLICATION DAMAGE:",
      "image": "",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Smoldering Resin",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Batrider's attacks apply a debuff that deals 20% of the attack damage every 1s for 2s.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Flaming Lasso",
      "image": "/images/abilities/batrider_flaming_lasso.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Lassoes an enemy and drags them in Batrider's wake. Dragged units cannot move, attack, or use abilities. Teleporting or blinking will break the lasso.",
      "manaCost": "125 / 150 / 175",
      "cooldown": "90 / 75 / 60"
    }
  ],
  "Chen": [
    {
      "name": "Penitence",
      "image": "/images/abilities/chen_penitence.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Damages enemy unit, forces it to move slower and lets allies attack it more quickly.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "20 / 17 / 14 / 11"
    },
    {
      "name": "Holy Persuasion",
      "image": "/images/abilities/chen_holy_persuasion.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Chen takes control of an enemy or neutral creep and receives a percentage of its bounty. Its maximum health is set to 400. Converted creeps will have increased movement speed and bonus damage. Chen may globally target his own creep if it has not taken damage in the last 3 seconds to unsummon it.",
      "manaCost": "110 / 130 / 150 / 170",
      "cooldown": "15"
    },
    {
      "name": "Divine Favor",
      "image": "/images/abilities/chen_divine_favor.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Passively provides an aura that grants increased health regeneration. Can be cast on allies to provide them with bonus armor and increasing the healing and health regeneration they receive.\n\nIf cast on Chen, all units controlled by Chen receive the buff.",
      "manaCost": "75",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Zealot",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "50",
      "cooldown": "10"
    },
    {
      "name": "Hand of God",
      "image": "/images/abilities/chen_hand_of_god.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Heals all allied heroes on the map as well as all units under Chen's control. A large heal is applied at first and a slow heal over time is applied for 10 seconds afterwards.",
      "manaCost": "200 / 300 / 400",
      "cooldown": "150 / 130 / 110"
    }
  ],
  "Spectre": [
    {
      "name": "Spectral Dagger",
      "image": "/images/abilities/spectre_spectral_dagger.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spectre flings a dagger to draw a Shadow Path, dealing damage and slowing the movement speed of any enemies along the trail. Units hit by the dagger also trail a Shadow Path. While treading the path, Spectre moves faster and phases through otherwise impassable terrain.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "22 / 20 / 18 / 16"
    },
    {
      "name": "Shadow Step",
      "image": "/images/abilities/spectre_shadow_step.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sends an uncontrollable illusion at a target that follows and attacks the target.\n\nThe Reality sub-ability may be used to teleport to the illusion, destroying it.",
      "manaCost": "60 / 65 / 70 / 75",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Dispersion",
      "image": "/images/abilities/spectre_dispersion.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spectre disperses part of the damage dealt to her, reflecting it to all nearby enemies. The effect lessens with distance.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Reality",
      "image": "/images/abilities/spectre_reality.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spectre assumes the target Shadow Step or Haunt illusion, destroying it.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Desolate",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Spectre and her illusions deal bonus Pure damage if attacking an enemy that does not have any allied units within a 350 radius around them.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Haunt",
      "image": "/images/abilities/spectre_haunt.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Creates a spectral nemesis to haunt all enemy Heroes.\n\nHaunt illusions are uncontrollable, take extra damage, and deal less damage than Spectre herself. They ignore terrain.\n\nThe Reality sub-ability may be used to teleport to the illusion, destroying it.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "160 / 150 / 140"
    }
  ],
  "Ancient Apparition": [
    {
      "name": "Cold Feet",
      "image": "/images/abilities/ancient_apparition_cold_feet.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Places a curse on an enemy, dealing damage over time. If the enemy unit doesn't move outside of the given range from the initial location, it will be stunned and frozen in place after 4 seconds.",
      "manaCost": "110 / 115 / 120 / 125",
      "cooldown": "15 / 13 / 11 / 9"
    },
    {
      "name": "Ice Vortex",
      "image": "/images/abilities/ancient_apparition_ice_vortex.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a vortex of icy energy that slows, deals damage, and increases magic damage done to enemies in its range.",
      "manaCost": "40 / 55 / 70 / 85",
      "cooldown": "10 / 8 / 6 / 4"
    },
    {
      "name": "Chilling Touch",
      "image": "/images/abilities/ancient_apparition_chilling_touch.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Enhances Ancient Apparition's attack with increased range and a burst of magical damage and slow.",
      "manaCost": "35",
      "cooldown": "10 / 7.5 / 5 / 2.5"
    },
    {
      "name": "Bone Chill",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "When Ancient Apparition deals Magic damage to an enemy with his abilities, it is slowed for a short duration. If the target is a Hero, its Strength is also reduced. Multiple instances of this effect stack and have independent durations.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Ice Blast",
      "image": "/images/abilities/ancient_apparition_ice_blast.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Launches a tracer toward any location on the battlefield, which must be triggered again to mark the area to be blasted by a damaging explosion of hail. The further the tracer travels, the larger the explosion will be. Enemies caught in the explosion, or who touch the icy ball of hail as it travels, are Frostbitten, taking damage over time and prevented from regenerating or healing. If a Frostbitten unit's health drops below a certain percentage, they will instantly shatter.",
      "manaCost": "175",
      "cooldown": "50 / 45 / 40"
    },
    {
      "name": "Release",
      "image": "/images/abilities/ancient_apparition_ice_blast_release.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Releases the ice blast to explode at the tracer's current location. Can be cast while silenced.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Doom": [
    {
      "name": "Devour",
      "image": "/images/abilities/doom_bringer_devour.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Consumes an enemy or neutral creep, acquiring any special abilities that it possessed. If alt-cast is activated, Doom will not acquire the creep's abilities. Duration is equal to the cooldown.",
      "manaCost": "40 / 50 / 60 / 70",
      "cooldown": "66"
    },
    {
      "name": "Scorched Earth",
      "image": "/images/abilities/doom_bringer_scorched_earth.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Carpets the nearby earth in flames which damage enemies, while also granting Doom increased movement speed and health regeneration.",
      "manaCost": "60 / 70 / 80 / 90",
      "cooldown": "41 / 39 / 37 / 35"
    },
    {
      "name": "Infernal Blade",
      "image": "/images/abilities/doom_bringer_infernal_blade.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Doom swings his burning sword, igniting the enemy. Stuns for 0.66 seconds and applies a 4 second burn that deals a base damage plus a percentage of the target's Max HP as damage per second.",
      "manaCost": "35",
      "cooldown": "13 / 10 / 7 / 4"
    },
    {
      "name": "Devoured Ability",
      "image": "/images/abilities/doom_bringer_empty1.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "This slot will be replaced with abilities acquired using Devour.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Devoured Ability",
      "image": "/images/abilities/doom_bringer_empty2.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "This slot will be replaced with abilities acquired using Devour.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Doom",
      "image": "/images/abilities/doom_bringer_doom.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Inflicts a curse that dispels an enemy and prevents them from casting spells or healing in any way, while taking damage over time.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "150 / 200 / 250",
      "cooldown": "140 / 130 / 120"
    },
    {
      "name": "Lvl ? Pain",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Doom's attacks curse enemy heroes. After 2.5s, the cursed hero bursts with a pillar of fire, damaging itself and all units in a 66 AoE for 15% of the damage taken from Doom during the curse. The damage and radius of the curse is 66% stronger if the enemy's level is a multiple of 6.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Ursa": [
    {
      "name": "Earthshock",
      "image": "/images/abilities/ursa_earthshock.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ursa leaps forward 250 units and slams the earth, causing a powerful shock to damage and slow all enemy units in a nearby area for 4 seconds.",
      "manaCost": "95",
      "cooldown": "15 / 13 / 11 / 9"
    },
    {
      "name": "Overpower",
      "image": "/images/abilities/ursa_overpower.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Using his skill in combat, Ursa gains increased attack speed and slow resistance for a number of subsequent attacks.",
      "manaCost": "45 / 50 / 55 / 60",
      "cooldown": "12 / 11 / 10 / 9"
    },
    {
      "name": "Fury Swipes",
      "image": "/images/abilities/ursa_fury_swipes.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ursa's claws dig deeper wounds in the enemy, causing consecutive attacks to the same enemy to deal more damage. If the same target is not attacked after 8 seconds, the bonus damage is lost.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Maul",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Ursa gains bonus damage equal to a percentage of his Current HP.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Enrage",
      "image": "/images/abilities/ursa_enrage.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Ursa goes into a frenzy, providing damage reduction and status resistance. Removes any existing debuffs.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "0 / 0 / 0",
      "cooldown": "60 / 45 / 30"
    }
  ],
  "Spirit Breaker": [
    {
      "name": "Charge of Darkness",
      "image": "/images/abilities/spirit_breaker_charge_of_darkness.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spirit Breaker fixes his sight on an enemy unit and starts charging through all objects, starting at 25% of the bonus speed and reaching his max speed after 1.5s.\n\nAll enemy units passed through and the targeted unit will be hit by a Greater Bash. If the targeted unit dies, Spirit Breaker will change his target to the nearest enemy unit to that location.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "22 / 19 / 16 / 13"
    },
    {
      "name": "Bulldoze",
      "image": "/images/abilities/spirit_breaker_bulldoze.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spirit Breaker gains movement speed and status resistance to ram through enemies. Can be used while charging.",
      "manaCost": "30 / 40 / 50 / 60",
      "cooldown": "22 / 20 / 18 / 16"
    },
    {
      "name": "Greater Bash",
      "image": "/images/abilities/spirit_breaker_greater_bash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Gives a chance to stun and knockback an enemy unit on an attack. Deals a percentage of movement speed as damage.",
      "manaCost": "0",
      "cooldown": "1.2"
    },
    {
      "name": "Planar Pocket",
      "image": "/images/abilities/spirit_breaker_planar_pocket.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Barathrum gains magic resistance and distorts reality around the selected hero, making any unit-targeted spells cast by enemy heroes get redirected towards Spirit Breaker. Can be cast on both allied and enemy heroes, but only spells cast by enemies of Spirit Breaker will be redirected.",
      "manaCost": "100",
      "cooldown": "30"
    },
    {
      "name": "Empowering Haste",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Spirit Breaker gains bonus Movement Speed for a duration whenever he stuns an enemy. Effects from multiple stuns stack and have independent durations. Duration pauses during Charge of Darkness.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Nether Strike",
      "image": "/images/abilities/spirit_breaker_nether_strike.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Spirit Breaker slips into the nether realm, reappearing next to his hapless victim. Upon reappearing, a Greater Bash of the current level occurs and deals bonus damage. Knocks back for double the normal distance.",
      "manaCost": "125 / 150 / 175",
      "cooldown": "75 / 55 / 35"
    }
  ],
  "Gyrocopter": [
    {
      "name": "Rocket Barrage",
      "image": "/images/abilities/gyrocopter_rocket_barrage.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launches a salvo of rockets at nearby enemy units in a radius around the Gyrocopter. Lasts 3 seconds.",
      "manaCost": "75",
      "cooldown": "7 / 6.5 / 6 / 5.5"
    },
    {
      "name": "Homing Missile",
      "image": "/images/abilities/gyrocopter_homing_missile.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Fires a homing missile to seek the targeted enemy unit. The missile gains speed over time, dealing damage and stunning when it impacts the target. Enemy units can destroy the missile before it reaches its target.",
      "manaCost": "120",
      "cooldown": "26 / 21 / 16 / 11"
    },
    {
      "name": "Flak Cannon",
      "image": "/images/abilities/gyrocopter_flak_cannon.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Gyrocopter's attacks hit all enemy units in an area around it for a limited number of attacks. Only the main target of attacks will receive attack bonuses such as Critical Strike. Lasts 12 seconds or until the attacks are used.",
      "manaCost": "50 / 60 / 70 / 80",
      "cooldown": "25"
    },
    {
      "name": "Afterburner",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Gyrocopter gains movement speed for a short duration after damaging an enemy with his attacks or abilities.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Side Gunner",
      "image": "/images/abilities/gyrocopter_side_gunner_spawn_ability.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Call Down",
      "image": "/images/abilities/gyrocopter_call_down.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Call down 3 aerial missile strikes that slow and damage enemy units in a target area. Each strike is 500 distance from the previous one.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "75 / 65 / 55"
    }
  ],
  "Alchemist": [
    {
      "name": "Acid Spray",
      "image": "/images/abilities/alchemist_acid_spray.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sprays high-pressure acid across a target area. Enemy units who step across the contaminated terrain take damage per second and have their armor reduced.",
      "manaCost": "120",
      "cooldown": "21"
    },
    {
      "name": "Unstable Concoction",
      "image": "/images/abilities/alchemist_unstable_concoction.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. Alchemist is faster while charging the concoction. After 5 seconds, the brew reaches its maximum damage and stun time. However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown.",
      "manaCost": "100",
      "cooldown": "17"
    },
    {
      "name": "Corrosive Weaponry",
      "image": "/images/abilities/alchemist_corrosive_weaponry.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Alchemist coats his weapons and empowers his spells with an acid that applies a stacking slow and base attack damage reduction to enemies hit.\n\nAttacks apply 2 stacks. Unstable Concoction applies 1 stack per second of brew time.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Berserk Potion",
      "image": "/images/abilities/alchemist_berserk_potion.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Alchemist throws a potion at an ally, applying a basic dispel and giving them attack speed, movement speed and HP regen.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "100",
      "cooldown": "35"
    },
    {
      "name": "Greevil's Greed",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Alchemist synthesizes additional gold from his enemies and bounty runes. With each kill, Alchemist earns base bonus gold and extra bonus gold. If Alchemist kills another unit which yields gold within the next 40 seconds, an additional instance of Extra Bonus Gold is added to the total. Additionally, causes bounty runes to yield more gold.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Chemical Rage",
      "image": "/images/abilities/alchemist_chemical_rage.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and health regeneration.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "50 / 75 / 100",
      "cooldown": "60"
    },
    {
      "name": "Unstable Concoction Throw",
      "image": "/images/abilities/alchemist_unstable_concoction_throw.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Throw it before it blows up!",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Invoker": [
    {
      "name": "Quas",
      "image": "/images/abilities/invoker_quas.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Allows manipulation of ice elements. Active Quas instances imbue Invoker with bonus hp regeneration. Passively grants bonus strength per level of Quas.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Wex",
      "image": "/images/abilities/invoker_wex.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Allows manipulation of storm elements. Active Wex instances imbue Invoker with bonus movement and attack speed. Passively grants bonus agility per level of Wex.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Exort",
      "image": "/images/abilities/invoker_exort.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Allows manipulation of fire elements. Active Exort instances imbue Invoker with bonus attack damage. Passively grants bonus intelligence per level of Exort.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Invoked Spell",
      "image": "/images/abilities/invoker_empty1.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Casting Invoke will replace this slot with one of ten unique spells based on Invoker's currently active Quas, Wex, and Exort buffs.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Invoked Spell",
      "image": "/images/abilities/invoker_empty2.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Casting Invoke will replace this slot with one of ten unique spells based on Invoker's currently active Quas, Wex, and Exort buffs.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Invoke",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": true,
      "description": "Combines the properties of the elements currently being manipulated to create a new spell for Invoker to use. Invoke cooldown is reduced by 0.3 seconds for each orb level.\n\nInvoker's vast knowledge of magic allows him to choose from Multiple Aghanim's Scepter and Shard options. The items must be activated before they can be used, and cannot be changed after they are chosen.\n\n Click the help button to see the list of possible spells.",
      "manaCost": "0",
      "cooldown": "7"
    },
    {
      "name": "Cold Snap",
      "image": "/images/abilities/invoker_cold_snap.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Invoker draws the heat from an enemy, chilling them to their very core for a duration based on the level of Quas. The enemy will take damage and be briefly frozen. Further damage taken in this state will freeze the enemy again, dealing bonus damage. The enemy can only be frozen so often, but the freeze cooldown decreases based on the level of Quas.",
      "manaCost": "100",
      "cooldown": "19"
    },
    {
      "name": "Ghost Walk",
      "image": "/images/abilities/invoker_ghost_walk.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Invoker manipulates the ice and electrical energies around him, rendering his body invisible and gaining health and mana regen. The elemental imbalance created as a consequence slows nearby enemies based on the level of Quas, and slows Invoker as well based on the level of Wex.",
      "manaCost": "175",
      "cooldown": "40"
    },
    {
      "name": "Tornado",
      "image": "/images/abilities/invoker_tornado.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Unleashes a fast moving tornado that picks up enemy units in its path, suspending them helplessly in the air shortly before allowing them to plummet to their doom. Travels further based on the level of Wex. Holds enemies in the air for a duration based on the level of Quas. Deals base damage plus added damage based on levels in Wex.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "140",
      "cooldown": "27"
    },
    {
      "name": "E.M.P.",
      "image": "/images/abilities/invoker_emp.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Invoker builds up a charge of electromagnetic energy at a targeted location which automatically detonates after 2.9 seconds. The detonation covers an area, draining mana based on the level of Wex. Deals damage for each point of mana drained. If EMP drains mana from an enemy hero, Invoker gains 25% of the mana drained.",
      "manaCost": "125",
      "cooldown": "27"
    },
    {
      "name": "Alacrity",
      "image": "/images/abilities/invoker_alacrity.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Invoker infuses an ally with an immense surge of energy, increasing their attack speed based on the level of Wex and their damage based on the level of Exort.",
      "manaCost": "75",
      "cooldown": "15"
    },
    {
      "name": "Chaos Meteor",
      "image": "/images/abilities/invoker_chaos_meteor.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Invoker pulls a flaming meteor from space onto the targeted location. Upon landing, the meteor rolls forward, constantly dealing damage based on the level of Exort, and rolling further based on the level of Wex. Units hit by the meteor will also be set on fire for a short time, receiving additional damage based on the level of Exort.",
      "manaCost": "200",
      "cooldown": "50"
    },
    {
      "name": "Sun Strike",
      "image": "/images/abilities/invoker_sun_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sends a catastrophic ray of fierce energy from the sun at any targeted location, incinerating all enemies standing beneath it once it reaches the earth. Deals damage based on the level of Exort, however this damage is spread evenly over all enemies hit.",
      "manaCost": "175",
      "cooldown": "23"
    },
    {
      "name": "Forge Spirit",
      "image": "/images/abilities/invoker_forge_spirit.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Invoker forges a spirit embodying the strength of fire and fortitude of ice. Damage and armor are based on the level of Exort while attack range, health, and duration are based on the level of Quas. The elemental's scorching attack is capable of melting the armor of enemy heroes. The number of spirits spawned is determined by the lower level of Quas and Exort.",
      "manaCost": "75",
      "cooldown": "27"
    },
    {
      "name": "Ice Wall",
      "image": "/images/abilities/invoker_ice_wall.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Generates a wall of solid ice directly in front of Invoker for a duration based on the level of Quas. The bitter cold emanating from it greatly slows nearby enemies based on the level of Quas and deals damage each second based on the level of Exort.",
      "manaCost": "125",
      "cooldown": "23"
    },
    {
      "name": "Deafening Blast",
      "image": "/images/abilities/invoker_deafening_blast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Invoker unleashes a mighty sonic wave in front of him, dealing damage to any enemy unit it collides with based on the level of Exort. The sheer impact from the blast is enough to knock those enemy units back for a duration based on the level of Quas, then disarm their attacks for a duration based on the level of Wex.",
      "manaCost": "250",
      "cooldown": "36"
    }
  ],
  "Silencer": [
    {
      "name": "Arcane Curse",
      "image": "/images/abilities/silencer_curse_of_the_silent.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Curses the target area, dealing damage and causing enemies to take damage over time and slowing their movement speed.\n\nAnytime affected enemies cast a spell, the duration is increased. The duration is paused as long as the target is silenced.",
      "manaCost": "120 / 130 / 140 / 150",
      "cooldown": "22 / 20 / 18 / 16"
    },
    {
      "name": "Glaives of Wisdom",
      "image": "/images/abilities/silencer_glaives_of_wisdom.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Silencer enchants his glaives with his wisdom, stealing his target's Intelligence with each hit and dealing additional damage based on his Intelligence.",
      "manaCost": "12 / 14 / 16 / 18",
      "cooldown": "0"
    },
    {
      "name": "Last Word",
      "image": "/images/abilities/silencer_last_word.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Enchants a target, providing vision of them and causing them to be damaged and silenced if they cast a spell or if the enchantment timer expires. Deals extra damage based on the difference in intelligence between Silencer and the target.",
      "manaCost": "100 / 105 / 110 / 115",
      "cooldown": "22 / 18 / 14 / 10"
    },
    {
      "name": "Suffer In Silence",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Silencer takes less damage from and deals more damage to silenced targets.\n\nIf an enemy Hero dies within 925 range of Silencer or was debuffed by Silencer at the time of death, Silencer permanently steals 1 Intelligence from them. If the victim was silenced, steal an extra 1 Intelligence.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Global Silence",
      "image": "/images/abilities/silencer_global_silence.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Silencer stops all sound, preventing enemy heroes and units on the map from casting spells.",
      "manaCost": "300 / 450 / 600",
      "cooldown": "120"
    },
    {
      "name": "Suffer In Silence",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Silencer takes less damage from and deals more damage to silenced targets.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Outworld Devourer": [
    {
      "name": "Arcane Orb",
      "image": "/images/abilities/obsidian_destroyer_arcane_orb.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Adds extra pure damage to Outworld Destroyer's attacks, based on his remaining mana pool.",
      "manaCost": "0",
      "cooldown": "4.5 / 3 / 1.5 / 0"
    },
    {
      "name": "Astral Imprisonment",
      "image": "/images/abilities/obsidian_destroyer_astral_imprisonment.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Steals a percentage of the target's max mana and places them into an astral prison. The hidden unit is invulnerable and disabled. When the astral prison implodes, it deals damage to the target.",
      "manaCost": "150",
      "cooldown": "18 / 16 / 14 / 12"
    },
    {
      "name": "Objurgation",
      "image": "/images/abilities/obsidian_destroyer_objurgation.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Increases Outworld Destroyer's maximum mana. When cast, protects Outworld Destroyer with an all damage barrier equal to a flat amount and a percentage of his maximum mana.",
      "manaCost": "175",
      "cooldown": "36 / 33 / 30 / 27"
    },
    {
      "name": "Essence Flux",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Passively grants a chance to restore a percentage of your max mana each time you cast an ability. Restores less mana from spells that modify attacks.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Sanity's Eclipse",
      "image": "/images/abilities/obsidian_destroyer_sanity_eclipse.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Unleashes a psychic blast that deals damage to enemies based on the difference between your mana and the target's mana. Sanity's Eclipse can hit units trapped by Astral Imprisonment.",
      "manaCost": "200 / 300 / 400",
      "cooldown": "140 / 130 / 120"
    }
  ],
  "Lycan": [
    {
      "name": "Summon Wolves",
      "image": "/images/abilities/lycan_summon_wolves.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons 2 wolves to aid Lycan in battle. At level 3, wolves gain Permanent Invisibility, and at level 4 wolves gain Cripple that gives 20% chance to cripple the target, causing 8 damage per second and lose 60 attack speed for 4 seconds.",
      "manaCost": "115 / 120 / 125 / 130",
      "cooldown": "30 / 30 / 30 / 30"
    },
    {
      "name": "Howl",
      "image": "/images/abilities/lycan_howl.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Strikes fear into enemies, reducing armor and attack damage of all enemies within 2000 range of Lycan and his wolves. At night, Howl's armor and attack damage reductions are global.",
      "manaCost": "40",
      "cooldown": "22 / 20 / 18 / 16"
    },
    {
      "name": "Feral Impulse",
      "image": "/images/abilities/lycan_feral_impulse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Increases the HP regeneration and damage of Lycan and all units under his control.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Wolf Bite",
      "image": "/images/abilities/lycan_wolf_bite.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Lycan bites an allied hero or creep-hero, granting them Shapeshift properties. Lycan and the bitten target gain 40% Lifesteal and share the healing effect of Lifesteal with each other as long as they are within 1200 range of each other.",
      "manaCost": "150",
      "cooldown": "105 / 95 / 85"
    },
    {
      "name": "Apex Predator",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Lycan and units he controls deal extra damage to neutral creeps.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Shapeshift",
      "image": "/images/abilities/lycan_shapeshift.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Lycan assumes his lupine form, granting him critical strikes and added vision at night. During Shapeshift, Lycan moves at increased speed and cannot be slowed. Movement and critical strike bonuses are also applied to all units under Lycan's control.",
      "manaCost": "100",
      "cooldown": "105 / 95 / 85"
    }
  ],
  "Brewmaster": [
    {
      "name": "Thunder Clap",
      "image": "/images/abilities/brewmaster_thunder_clap.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Slams the ground, dealing damage and slowing the movement speed and attack rate of nearby enemy units.",
      "manaCost": "100",
      "cooldown": "18 / 16 / 14 / 12"
    },
    {
      "name": "Cinder Brew",
      "image": "/images/abilities/brewmaster_cinder_brew.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Rolls a barrel of ale at enemies that damages enemies along its path and spills out at the target location.\n\nAny enemy in the path or the spill area is drenched in cinder brew, becoming slowed. If the enemy receives Magic or Pure damage, they will be ignited, extending the duration by 3s and causing them to take damage over time.",
      "manaCost": "50 / 60 / 70 / 80",
      "cooldown": "19 / 17 / 15 / 13"
    },
    {
      "name": "Drunken Brawler",
      "image": "/images/abilities/brewmaster_drunken_brawler.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Brewmaster can switch stances based on the elements he controls.\n\nWhenever Brewmaster casts an ability, he becomes Brewed Up, increasing his stance power by 150% for 5s. If he casts another ability while Brewed Up, the duration is extended by 2s. After Brewed Up expires, he is hungover and cannot Brew Up again for 9s.\n\nEarth Brawler gains bonus Magic Resistance and Armor.\n\nStorm Brawler gains bonus Evasion and Movement Speed.\n\nFire Brawler gains bonus Attack Speed and chance to critical strike.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Liquid Courage",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "When Brewmaster drops below 50% Health he gains a Status Resistance buff and his movement speed alternates every 1s between being faster and being slower. The effect becomes stronger at lower health, scaling from 0 up to max values at 20% Health.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Primal Split",
      "image": "/images/abilities/brewmaster_primal_split.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Splits Brewmaster into elements, forming 3 specialized warriors, adept at survival, each with their own abilities. If any of them survive until the end of their summoned timer, the Brewmaster is reborn. Each Warrior gains its respective Drunken Brawler stance.",
      "manaCost": "150 / 200 / 250 / 250",
      "cooldown": "140 / 130 / 120"
    }
  ],
  "Shadow Demon": [
    {
      "name": "Disruption",
      "image": "/images/abilities/shadow_demon_disruption.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Banishes the targeted unit from the battlefield for a short duration. Upon returning, two illusions of the banished unit with bonus base damage are created under Shadow Demon's control.",
      "manaCost": "120",
      "cooldown": "26 / 24 / 22 / 20"
    },
    {
      "name": "Disseminate",
      "image": "/images/abilities/shadow_demon_disseminate.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Whenever the target takes damage, all enemies, including the target itself if it is an enemy, within 675 range of the target also receive a portion of that damage. Can target enemy and allied units. Effect is paused if the target is hidden by Disruption.",
      "manaCost": "100",
      "cooldown": "26 / 22 / 18 / 14"
    },
    {
      "name": "Shadow Poison",
      "image": "/images/abilities/shadow_demon_shadow_poison.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Deals damage in a line, and afflicts enemy units with a poison effect. The poison deals 1/2/4/8/16 times the stack damage based on the number of stacks on the target, up to 5 stacks. Additional stacks cause 50 damage each. This deferred damage is dealt when Shadow Poison's duration is expired, or the Release sub-ability is used.",
      "manaCost": "40",
      "cooldown": "2.5"
    },
    {
      "name": "Shadow Poison Release",
      "image": "/images/abilities/shadow_demon_shadow_poison_release.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Releases the poison to do damage on all affected enemies. Units under the effect of Disruption can still be affected by Shadow Poison.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Demonic Cleanse",
      "image": "/images/abilities/shadow_demon_demonic_cleanse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Cleanses the target allied unit, removing negative buffs for the duration. At the end of the duration, the unit is healed. Units under the effect of Disruption can still be affected by Demonic Cleanse.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "150",
      "cooldown": "60"
    },
    {
      "name": "Demonic Purge",
      "image": "/images/abilities/shadow_demon_demonic_purge.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Purges the target enemy unit, removing positive buffs, and slowing the target for the duration. The unit slowly regains its speed until the end of the duration, upon which damage is dealt. Units under the effect of Disruption can still be affected by Demonic Purge.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "150 / 175 / 200",
      "cooldown": "70 / 65 / 60"
    },
    {
      "name": "Menace",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Shadow Demon's Attacks apply a stacking debuff to the enemy for 8 seconds that increases their damage taken.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Lone Druid": [
    {
      "name": "Entangle",
      "image": "/images/abilities/lone_druid_entangle.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Allows Lone Druid to Entangle enemies once they gain 5 stacks. Entangled enemies are rooted and take damage over time.\n\nWhen cast, applies 2 stacks to each enemy hero in the area and 5 stacks to enemy creeps. Also empowers Lone Druid for 10s, making him apply 1 stack with each attack on enemy heroes. Enemies cannot gain stacks while Entangled.\n\nLeveling this ability also levels Spirit Bear's Entangling Claws ability.",
      "manaCost": "60",
      "cooldown": "20 / 19 / 18 / 17"
    },
    {
      "name": "Spirit Link",
      "image": "/images/abilities/lone_druid_spirit_link.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Links Lone Druid and the Spirit Bear, increasing their movement speed as well as sharing a percentage of their lifesteal with each other.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Savage Roar",
      "image": "/images/abilities/lone_druid_savage_roar.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Lone Druid and the Spirit Bear roar fiercely causing nearby enemies to flee towards their base in terror. Their movement speed is increased by 20%.",
      "manaCost": "50",
      "cooldown": "29 / 26 / 23 / 20"
    },
    {
      "name": "Summon Spirit Bear",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Summons a powerful Spirit Bear companion that can equip items.\n\nIf the bear moves 1100 distance away from the Lone Druid, it cannot attack. Lone Druid suffers 20% of his max health as backlash damage if the Spirit Bear dies.\nSpirit Bear has Demolish, Return, Entangling Claws, Savage Roar, and Spirit Link abilities.",
      "manaCost": "100",
      "cooldown": "120"
    },
    {
      "name": "True Form",
      "image": "/images/abilities/lone_druid_true_form.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Lone Druid morphs himself into a raging bear, losing his ranged advantage, but gaining bonus armor, bonus health, and bonus attack damage.",
      "manaCost": "80",
      "cooldown": "60 / 55 / 50"
    }
  ],
  "Chaos Knight": [
    {
      "name": "Chaos Bolt",
      "image": "/images/abilities/chaos_knight_chaos_bolt.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Throws a mysterious bolt of energy at the target unit. It stuns for a random duration and deals random damage.",
      "manaCost": "110",
      "cooldown": "13 / 12 / 11 / 10"
    },
    {
      "name": "Reality Rift",
      "image": "/images/abilities/chaos_knight_reality_rift.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Teleports Chaos Knight, any illusions he has, and the target unit to a point along the line between him and the target. The enemy unit has their armor reduced for 6s.",
      "manaCost": "50",
      "cooldown": "15 / 12 / 9 / 6"
    },
    {
      "name": "Chaos Strike",
      "image": "/images/abilities/chaos_knight_chaos_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Chaos Knight and his illusions' attacks have a chance to deal a critical strike of varying strength with bonus lifesteal. Lifesteal from creeps is reduced.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Fundamental Forging",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Phantasm",
      "image": "/images/abilities/chaos_knight_phantasm.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Summons several phantasmal copies of the Chaos Knight from alternate dimensions. The phantasms are illusions that deal 100% damage, but take 350% damage.\nDISPEL TYPE: Basic Dispel",
      "manaCost": "100 / 200 / 300",
      "cooldown": "85 / 80 / 75"
    }
  ],
  "Meepo": [
    {
      "name": "Earthbind",
      "image": "/images/abilities/meepo_earthbind.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tosses a net at the target point, rooting down all enemy units in an area around it.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Poof",
      "image": "/images/abilities/meepo_poof.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Drawing mystical energies from the earth, a Meepo can teleport to another Meepo or itself after channeling for 1.5 seconds, damaging the enemy in both the departure and arrival locations. \n\nIf the ability is in alt-cast state, all Meepos will also cast Poof to the target. When cast on the ground, all Meepos except the selected one will Poof to the closest location.",
      "manaCost": "80",
      "cooldown": "12 / 10 / 8 / 6"
    },
    {
      "name": "Ransack",
      "image": "/images/abilities/meepo_ransack.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Steals health from the enemy with each strike and heals all other Meepos for that amount.\n\nReduced to 60% against creeps.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Dig",
      "image": "/images/abilities/meepo_petrify.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Digs into the ground for a short duration, dispelling Meepo and causing him to become invulnerable and untargetable for 3s. Restores 25% of his max health over that duration.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "125",
      "cooldown": "40"
    },
    {
      "name": "MegaMeepo",
      "image": "/images/abilities/meepo_megameepo.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Primary Meepo mounts all other Meepos in a 600 radius around him on top of his shoulders. While in this form, he gains 40% of the other Meepo stats and can Fling them at enemies, dealing damage and slowing them.\n\n When cast, Earthbind generates additional nets and Poof deals 50% more damage for each Meepo on top.",
      "manaCost": "0",
      "cooldown": "90"
    },
    {
      "name": "Divided We Stand",
      "image": "/images/abilities/meepo_divided_we_stand.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Meepo summons another Meepo, which levels up and shares items with the main Meepo. Ability cooldowns are independent, but items share cooldowns between Meepos. Damage, attack speed, health / mana regeneration, mana burn, and proc chance bonuses from items are distributed equally among the amount of Meepos.\n\nIf any Meepo dies, they all die.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Geomancy",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Meepo grants stacking bonuses to himself and his clones based on their terrain. Each Meepo grants his bonus to the other Meepos.\n\nIf there is a tree within 250 range, he receives 1 HP regen.\n\nIf he is standing on dirt, he receives 2% bonus movement speed.\n\nIf he is in the water, his attacks slow the target by 2% for 2 seconds.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "MegaMeepo Fling",
      "image": "/images/abilities/meepo_megameepo_fling.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0.5"
    }
  ],
  "Treant Protector": [
    {
      "name": "Nature's Grasp",
      "image": "/images/abilities/treant_natures_grasp.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates vines towards the target location. Vines slow down and deal damage to enemies that walk through. Does 35% less damage to creeps.",
      "manaCost": "90",
      "cooldown": "23 / 21 / 19 / 17"
    },
    {
      "name": "Leech Seed",
      "image": "/images/abilities/treant_leech_seed.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Treant's attack plants a life-sapping seed in an enemy unit. That unit takes additional magic damage, is rooted and disarmed for a short duration, and emits 2 healing pulses to up to 5 nearby allies of Treant Protector based on the damage dealt by the attack.",
      "manaCost": "35",
      "cooldown": "15 / 12 / 9 / 6"
    },
    {
      "name": "Living Armor",
      "image": "/images/abilities/treant_living_armor.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Infuses the target hero or structure with a protective coating which heals the target and blocks damage from player-controlled sources. Each time this spell blocks damage, the block amount is decreased. If the damage block is decreased to 0, the buff is removed early.",
      "manaCost": "80",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Eyes In The Forest",
      "image": "/images/abilities/treant_eyes_in_the_forest.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Treant Protector enchants a tree, which grants him unobstructed vision in that location. The eyes last for 360 seconds and are invisible, but are destroyed if their host tree is destroyed or if they are attacked directly.",
      "manaCost": "30",
      "cooldown": "0"
    },
    {
      "name": "Nature's Guise",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Grants bonus movement speed when near trees. Treant Protector additionally has Tree Walking if he has not taken damage for 2.75 seconds. While Tree Walking, Nature's Guise can be activated to grant Treant invisibility until he attacks or is no longer near a tree.",
      "manaCost": "0",
      "cooldown": "36"
    },
    {
      "name": "Overgrowth",
      "image": "/images/abilities/treant_overgrowth.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Summons an overgrowth of vines and branches around Treant that deal damage to afflicted enemies and prevent them from moving, blinking, going invisible, or attacking.",
      "manaCost": "200 / 250 / 300",
      "cooldown": "110 / 100 / 90"
    }
  ],
  "Ogre Magi": [
    {
      "name": "Fireblast",
      "image": "/images/abilities/ogre_magi_fireblast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Blasts an enemy unit with a wave of fire, dealing damage and stunning the target.",
      "manaCost": "70 / 85 / 100 / 115",
      "cooldown": "11 / 10 / 9 / 8"
    },
    {
      "name": "Ignite",
      "image": "/images/abilities/ogre_magi_ignite.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Drenches the target and another random unit in volatile chemicals, causing it to burst into flames. The target is in immense pain, taking damage and moving more slowly.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "17"
    },
    {
      "name": "Bloodlust",
      "image": "/images/abilities/ogre_magi_bloodlust.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Incites a frenzy in a friendly unit, increasing its movement speed and attack speed. Gives bonus attack speed if cast on Ogre himself. Can be cast on towers.",
      "manaCost": "40 / 50 / 60 / 70",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Unrefined Fireblast",
      "image": "/images/abilities/ogre_magi_unrefined_fireblast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Blasts an enemy unit with a wave of fire, dealing 150 + 1.5x Ogre's Strength in damage and stunning the target. Its mana cost is 35% of Ogre Magi's current mana.",
      "manaCost": "400",
      "cooldown": "7"
    },
    {
      "name": "Fire Shield",
      "image": "/images/abilities/ogre_magi_smash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a shield around the target ally, absorbing a percentage of the damage of next 3 attacks from enemy heroes. When damage is absorbed, a fireball is launched at the attacker. Can be cast on towers.",
      "manaCost": "50",
      "cooldown": "15"
    },
    {
      "name": "Dumb Luck",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Multicast",
      "image": "/images/abilities/ogre_magi_multicast.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Enables Ogre Magi to cast his abilities and items multiple times with each use. Each point of Strength adds to Multicast chance. Every 16 Strength adds 1%.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Undying": [
    {
      "name": "Decay",
      "image": "/images/abilities/undying_decay.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Undying steals strength from all enemy heroes in an area, dealing base damage as he claims the enemy's strength for himself. Deals 2x damage to creeps.",
      "manaCost": "110",
      "cooldown": "13 / 10 / 7 / 4"
    },
    {
      "name": "Soul Rip",
      "image": "/images/abilities/undying_soul_rip.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Undying rips health away from all nearby units and uses it to heal an ally, or damage an enemy. Soul Rip can also be used to heal Tombstone.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "15 / 12 / 9 / 6"
    },
    {
      "name": "Tombstone",
      "image": "/images/abilities/undying_tombstone.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a tombstone at the target point. Zombies will frequently spawn next to every enemy unit in the area around the Tombstone, and attack them. Zombies have the Deathlust ability, which causes their attacks to slow the target, and if the target reaches below a certain amount of health, increases the attack and movement speed of the zombie.",
      "manaCost": "125 / 150 / 175 / 200",
      "cooldown": "80"
    },
    {
      "name": "Ceaseless Dirge",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "480"
    },
    {
      "name": "Flesh Golem",
      "image": "/images/abilities/undying_flesh_golem.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Undying transforms into a horrifying flesh golem. While in this state, he gains a percentage increase to strength, bonus movement speed, and causes attacks to slow, apply damage amplification, and spawn Tombstone zombies.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "140"
    }
  ],
  "Rubick": [
    {
      "name": "Telekinesis",
      "image": "/images/abilities/rubick_telekinesis.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Rubick uses his telekinetic powers to lift the enemy into the air briefly and then hurls them back at the ground. The unit lands on the ground with such force that it stuns nearby enemies.",
      "manaCost": "110",
      "cooldown": "22 / 19 / 16 / 13"
    },
    {
      "name": "Fade Bolt",
      "image": "/images/abilities/rubick_fade_bolt.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Rubick creates a powerful stream of arcane energy that travels between enemy units, dealing damage and reducing their attack and spell damage. Each jump deals less damage.",
      "manaCost": "110 / 125 / 140 / 155",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Arcane Supremacy",
      "image": "/images/abilities/rubick_arcane_supremacy.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Rubick's mastery of the arcane allows him to have a larger cast range and bonus spell amplification.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Stolen Spell",
      "image": "/images/abilities/rubick_empty1.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spells acquired with Spell Steal will replace this slot.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Stolen Spell",
      "image": "/images/abilities/rubick_empty2.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Spells acquired with Spell Steal will replace this slot.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Spell Steal",
      "image": "/images/abilities/rubick_spell_steal.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Rubick studies the trace magical essence of one enemy hero, learning the secrets of the last spell the hero cast. Rubick can use this spell as his own for several minutes or until he dies.",
      "manaCost": "25 / 25 / 25",
      "cooldown": "16 / 10 / 4"
    },
    {
      "name": "Telekinesis Land",
      "image": "/images/abilities/rubick_telekinesis_land.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Chooses the location the target will land when Telekinesis finishes.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Curiosity",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Rubick gains 1 stack of Curiosity per level that grants him 1 base damage, 0.3% Buff/Debuff Duration, and 2 AOE Bonus. \n\nIf Rubick sees an enemy Hero cast an ability within 1200 distance of him, he gains 2 Curiosity for 20 seconds. If an enemy Hero dies while Rubick has Curiosity from them and he damaged them in the last 3 seconds, he gains 1 Curiosity permanently.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Telekinesis Land",
      "image": "/images/abilities/rubick_telekinesis_land_self.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Chooses the location you will land when Telekinesis finishes.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Disruptor": [
    {
      "name": "Thunder Strike",
      "image": "/images/abilities/disruptor_thunder_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Repeatedly strikes the targeted unit with lightning. Each strike damages nearby enemy units in a small radius and slows enemy movement and attack speed by 100% for x1.75 seconds. Provides vision of its target.",
      "manaCost": "115 / 120 / 125 / 130",
      "cooldown": "18 / 15 / 12 / 9"
    },
    {
      "name": "Glimpse",
      "image": "/images/abilities/disruptor_glimpse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Teleports the target hero back to where it was 4 seconds ago. Instantly kills illusions. Deals damage equal to a percentage of the distance glimpsed, that cannot go over a damage maximum.",
      "manaCost": "70 / 85 / 100 / 115",
      "cooldown": "24 / 22 / 20 / 18"
    },
    {
      "name": "Kinetic Field",
      "image": "/images/abilities/disruptor_kinetic_field.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "After a short formation time, creates a circular barrier of kinetic energy that enemies can't pass.",
      "manaCost": "70",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Kinetic Fence",
      "image": "/images/abilities/disruptor_kinetic_fence.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "After a short formation time, creates a wall out of kinetic energy that enemies cannot pass.",
      "manaCost": "70",
      "cooldown": "14"
    },
    {
      "name": "Electromagnetic Repulsion",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever Disruptor takes more than 250 damage from any source within 400 radius, all nearby enemies within take damage equal to 1.5x of Disruptor's Intelligence, and are pushed back up to a 400 distance away.",
      "manaCost": "0",
      "cooldown": "5"
    },
    {
      "name": "Static Storm",
      "image": "/images/abilities/disruptor_static_storm.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Creates a damaging static storm that also silences all enemy units in the area for the duration. The damage starts off weak, but increases in power over the duration.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "100 / 85 / 70"
    }
  ],
  "Nyx Assassin": [
    {
      "name": "Impale",
      "image": "/images/abilities/nyx_assassin_impale.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Rock spikes burst from the earth along a straight path. Enemy units take damage, then are hurled into the air and stunned.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "17 / 15 / 13 / 11"
    },
    {
      "name": "Mind Flare",
      "image": "/images/abilities/nyx_assassin_jolt.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Deals damage equal to a percentage of the target's Max Mana and burns part of it away. Deals additional damage equal to a percentage of the damage the target has taken from Nyx Assassin in the last 15s. Resets accumulated damage before applying damage.",
      "manaCost": "100 / 105 / 110 / 115",
      "cooldown": "11 / 9.5 / 8 / 6.5"
    },
    {
      "name": "Spiked Carapace",
      "image": "/images/abilities/nyx_assassin_spiked_carapace.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "When activated while above ground, Spiked Carapace reflects and negates damage dealt to Nyx Assassin (max once from each source), as well as stunning the source of the damage. Activating Spiked Carapace will not break Vendetta invisibility.\n\nWhile Burrowed, Spiked Carapace instantly stuns nearby enemies when cast.",
      "manaCost": "40 / 40 / 40 / 40",
      "cooldown": "20 / 16 / 12 / 8"
    },
    {
      "name": "Burrow",
      "image": "/images/abilities/nyx_assassin_burrow.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Nyx Assassin buries himself beneath the battlefield over a short duration. Once burrowed, Spiked Carapace instantly stuns nearby enemies when cast, the range of Mind Flare and Impale is increased, and Impale's cooldown is decreased. While burrowed, Nyx Assassin is stationary, unable to attack, and invisible. Nyx Assassin gains damage reduction from all damage sources.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Mana Burn",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Nyx Assassin's damage on enemies also burns mana as a percentage of the damage dealt.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Vendetta",
      "image": "/images/abilities/nyx_assassin_vendetta.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Nyx Assassin becomes invisible and gains a speed bonus. If Nyx Assassin attacks to break the invisibility, massive bonus damage is dealt with the attack that applies a break to the target. Nyx Assassin has 75 additional attack range and a 70% faster attack animation for this attack.",
      "manaCost": "180 / 240 / 300",
      "cooldown": "80 / 70 / 60"
    },
    {
      "name": "Unburrow",
      "image": "/images/abilities/nyx_assassin_unburrow.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Emerge from the burrow.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Naga Siren": [
    {
      "name": "Mirror Image",
      "image": "/images/abilities/naga_siren_mirror_image.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates multiple images of Naga Siren under her control.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "75 / 90 / 105 / 120",
      "cooldown": "40 / 35 / 30 / 25"
    },
    {
      "name": "Ensnare",
      "image": "/images/abilities/naga_siren_ensnare.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Interrupts the target and traps them in place, preventing movement or blinking. Can target units affected by Song of the Siren.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "21 / 18 / 15 / 12"
    },
    {
      "name": "Rip Tide",
      "image": "/images/abilities/naga_siren_rip_tide.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Naga Siren and her illusions deal bonus damage to enemies and reduce their armor for 4 seconds every 6 attacks.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Reel In",
      "image": "/images/abilities/naga_siren_reel_in.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Naga Siren channels for up to 5 seconds, pulling all units affected by Naga's Ensnare in a 1600 range towards her at a speed of 200. Channeling ends when the Ensnared unit is 100 distance away.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Eelskin",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Naga Siren has bonus evasion, increased per every other Naga Siren within 900 radius.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Song of the Siren",
      "image": "/images/abilities/naga_siren_song_of_the_siren.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "All enemies in range of the Naga Siren are put into a magical stasis where they cannot act or be attacked. Using Song of the Siren again will end the duration early.",
      "manaCost": "150 / 250 / 350",
      "cooldown": "160 / 130 / 100"
    },
    {
      "name": "Song of the Siren End",
      "image": "/images/abilities/naga_siren_song_of_the_siren_cancel.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Release enemy units from your song so they can be targeted again.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Keeper of the Light": [
    {
      "name": "Illuminate",
      "image": "/images/abilities/keeper_of_the_light_illuminate.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Channels light energy, building power the longer it's channeled. Once released, a wave is sent forth that deals damage and gives vision in its path. The longer it is channeled, the more damage is dealt.",
      "manaCost": "100 / 125 / 150 / 175",
      "cooldown": "13"
    },
    {
      "name": "Blinding Light",
      "image": "/images/abilities/keeper_of_the_light_blinding_light.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A blinding light flashes over the targeted area, knocking back units to the edge of the area and blinding them, causing them to miss some attacks. Minimum knockback distance is 175 range over 0.6 seconds.",
      "manaCost": "120 / 130 / 140 / 150",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Chakra Magic",
      "image": "/images/abilities/keeper_of_the_light_chakra_magic.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Restores mana to the target unit and reduces cooldowns of all basic abilities currently on cooldown by a fixed amount. Is 30% more effective when used on himself.",
      "manaCost": "0",
      "cooldown": "20 / 17 / 14 / 11"
    },
    {
      "name": "Solar Bind",
      "image": "/images/abilities/keeper_of_the_light_radiant_bind.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Weakens an enemy's magical resistance, and applies a slow that increases in strength the more the target moves.",
      "manaCost": "120",
      "cooldown": "14"
    },
    {
      "name": "Will-O-Wisp",
      "image": "/images/abilities/keeper_of_the_light_will_o_wisp.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons Ignis Fatuus at the targeted area. Alternates on and off, drawing enemies closer with its mesmerising flicker.",
      "manaCost": "150",
      "cooldown": "60"
    },
    {
      "name": "Spirit Form",
      "image": "/images/abilities/keeper_of_the_light_spirit_form.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Ezalor temporarily turns his body luminescent, gaining cast range, increasing the speed bonus from Bright Speed, and allows Illuminate to be channeled by a separate spirit and heal allies.",
      "manaCost": "75 / 125 / 175",
      "cooldown": "85 / 80 / 75"
    },
    {
      "name": "Release Illuminate",
      "image": "/images/abilities/keeper_of_the_light_illuminate_end.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Release the channel early.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Bright Speed",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Keeper of the Light gains 1 movement speed for every 2.5 Intelligence.\n\nWhenever Keeper of the Light moves 300 distance, he leaves behind light that allows him to see 400 range for 3 seconds.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Io": [
    {
      "name": "Tether",
      "image": "/images/abilities/wisp_tether.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tethers Io to an allied unit, granting bonus movement speed to both. When Io restores health or mana, the tethered unit gains a portion of that amount. The tether breaks when the allied unit moves too far away, or Io cancels the tether. Tether slows enemies touching it.",
      "manaCost": "40 / 40 / 40 / 40",
      "cooldown": "12"
    },
    {
      "name": "Spirits",
      "image": "/images/abilities/wisp_spirits.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summon five particle spirits that dance in a circle around Io. If a particle collides with an enemy hero, it explodes, damaging all enemy units in an area around it. Creeps take minor damage from touching a particle spirit, but do not cause them to explode. When its duration ends, any remaining Spirits explode.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "15"
    },
    {
      "name": "Overcharge",
      "image": "/images/abilities/wisp_overcharge.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Io gains attack speed, spell amplification, and health regeneration based on max health. If Io is Tethered to an ally, that unit also gains any bonuses granted by Overcharge.",
      "manaCost": "40 / 60 / 80 / 100",
      "cooldown": "25 / 22 / 19 / 16"
    },
    {
      "name": "Spirits In",
      "image": "/images/abilities/wisp_spirits_in.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sends the spirits closer to you. Can be toggled on and off.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Spirits Out",
      "image": "/images/abilities/wisp_spirits_out.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sends the spirits farther away from you. Can be toggled on and off.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Relocate",
      "image": "/images/abilities/wisp_relocate.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Teleports Io and a tethered ally to any location. After the spell expires, Io and the tethered ally will return to their original location. Double-click to teleport to your team's base fountain.",
      "manaCost": "175",
      "cooldown": "90 / 80 / 70"
    },
    {
      "name": "Break Tether",
      "image": "/images/abilities/wisp_tether_break.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Break the link to the tethered unit.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Equilibrium",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Io gains outgoing damage amplification the closer it is to full health, and Health Restoration and Healing Amplification the closer it is to zero health.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Visage": [
    {
      "name": "Grave Chill",
      "image": "/images/abilities/visage_grave_chill.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Visage drains the movement and attack speed of the targeted unit, gaining the drained speed for itself and nearby Familiars.",
      "manaCost": "75",
      "cooldown": "17 / 15 / 13 / 11"
    },
    {
      "name": "Soul Assumption",
      "image": "/images/abilities/visage_soul_assumption.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Visage gathers charges of soul essence each time nearby heroes take more than 100 damage. When the essence is released, it deals base damage as well as damage for each gathered soul charge.",
      "manaCost": "110",
      "cooldown": "4"
    },
    {
      "name": "Gravekeeper's Cloak",
      "image": "/images/abilities/visage_gravekeepers_cloak.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Visage generates a layered barrier that protects him from damage. If he receives damage from a player, one layer is removed, and takes time to recover.\n\nVisage's Familiars are protected by his cloak when within 900 range of him, based on the number of layers Visage has.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Stone Form",
      "image": "/images/abilities/visage_stone_form_self_cast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Orders the Familiar closest to Visage to cast Stone Form in its current location, turning into stone and smashing into the ground, stunning and damaging all targets in the area. The Familiar becomes invulnerable, and will regain its health very rapidly. After 6 seconds, the Familiar will automatically leave Stone Form.\n\n Can be alt-cast to order the closest Familiar to the target location to move there and cast Stone Form.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Silent as the Grave",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Visage gains flying movement and bonus movement speed. Upon attacking or casting, the speed and flying movement are lost and Visage and his familiars deal additional attack damage for 2s.",
      "manaCost": "50",
      "cooldown": "45.75"
    },
    {
      "name": "Summon Familiars",
      "image": "/images/abilities/visage_summon_familiars.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Conjures 2 blind Familiars to fight for Visage. Familiars possess the Stone Form ability, that allows them to turn into stone, stunning enemies upon landing. While in Stone Form, Familiars are invulnerable, and rapidly regenerate their health. Familiars grant high bounty when killed.\n\nThe ability can be cast in the alt-cast state to recall Visages familiars after 4s, during which they cannot attack or act.",
      "manaCost": "150 / 150 / 150",
      "cooldown": "120 / 110 / 100"
    },
    {
      "name": "Stone Form",
      "image": "/images/abilities/visage_summon_familiars_stone_form.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "After a short delay, the Familiar turns into stone and smashes into the ground, stunning and damaging all targets in the area. The Familiar becomes invulnerable, and will regain its health very rapidly. After 6 seconds, the Familiar will automatically leave Stone Form. \n\n Can be alt-cast to order the Familiar to move to the target location and cast Stone Form.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Slark": [
    {
      "name": "Dark Pact",
      "image": "/images/abilities/slark_dark_pact.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "After a short delay, Slark sacrifices some of his life blood, purging most negative debuffs and dealing damage to enemy units around him and to himself. Slark only takes 30% of the damage.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "65",
      "cooldown": "9 / 8 / 7 / 6"
    },
    {
      "name": "Pounce",
      "image": "/images/abilities/slark_pounce.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Slark leaps forward, leashing and applying Essence Shift stacks to the first hero he connects. That unit can only move a limited distance away from Slark's landing position.",
      "manaCost": "75",
      "cooldown": "24 / 20 / 16 / 12"
    },
    {
      "name": "Saltwater Shiv",
      "image": "/images/abilities/slark_saltwater_shiv.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Slark slices the target with his salty shiv, stealing a portion of the target's movement speed, Health Regen and Health Restoration.\n\nThese effects stack independently.",
      "manaCost": "25 / 30 / 35 / 40",
      "cooldown": "12 / 10.5 / 9 / 7.5"
    },
    {
      "name": "Depth Shroud",
      "image": "/images/abilities/slark_depth_shroud.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates a cloud at the target location. All allies inside the radius are hidden and affected by Shadow Dance.",
      "manaCost": "75",
      "cooldown": "75"
    },
    {
      "name": "Essence Shift",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Slark steals the life essence of enemy heroes with his attacks, draining 1 of each of their attributes and converting them to bonus 3 Agility. If Slark kills an affected enemy hero, he permanently steals 1 Agility.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Shadow Dance",
      "image": "/images/abilities/slark_shadow_dance.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "When not visible to the enemy team, Slark passively gains bonus movement speed and health regeneration. If Slark is damaged by a neutral unit, the passive movement and health regeneration bonuses are lost for 2 seconds.\n\nWhen activated, Slark hides himself in a cloud of shadows, becoming immune to detection. Attacking, casting spells, and using items will not reveal Slark, but enemies can see the cloud itself.",
      "manaCost": "100",
      "cooldown": "50 / 40 / 30"
    }
  ],
  "Medusa": [
    {
      "name": "Split Shot",
      "image": "/images/abilities/medusa_split_shot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Medusa magically splits her shot into several arrows. These arrows deal a lower percent of her normal damage.The extra targets will not receive other attack effects (such as critical strike).",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Mystic Snake",
      "image": "/images/abilities/medusa_mystic_snake.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A mystic snake made of energy jumps from target to target dealing damage. Damage and speed increases with each jump. After it reaches its last target, it returns to Medusa to replenish her with mana. The snake returns a percentage of the targets' total mana.",
      "manaCost": "80 / 100 / 120 / 140",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Gorgon's Grasp",
      "image": "/images/abilities/medusa_gorgon_grasp.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Medusa fires arrows in a line that land in 3 groups, with each grouping larger than the previous. Enemies struck by a volley of arrows take an initial burst of damage and then are rooted, cannot turn, are revealed to the enemy, and take damage per second.",
      "manaCost": "65 / 85 / 105 / 125",
      "cooldown": "30 / 26 / 22 / 18"
    },
    {
      "name": "Cold Blooded",
      "image": "/images/abilities/medusa_cold_blooded.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "When Medusa is targeted with a spell, a single-target Mystic Snake is sent back towards the enemy that turns them into stone for 1s.",
      "manaCost": "0",
      "cooldown": "12"
    },
    {
      "name": "Mana Shield",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Creates a shield that absorbs 98% of incoming damage in exchange for Medusa's mana. Illusions absorb 60% less damage per point of mana.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Stone Gaze",
      "image": "/images/abilities/medusa_stone_gaze.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Any enemy units looking at Medusa will have their movement and attack speed slowed. If 2 seconds of total time is accumulated looking at Medusa while Stone Gaze is active, that unit will turn to stone. Petrified units are stunned, and take bonus physical attack damage.",
      "manaCost": "250",
      "cooldown": "90"
    }
  ],
  "Troll Warlord": [
    {
      "name": "Battle Stance",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Troll Warlord swaps from using ranged to melee attacks. While melee, Troll Warlord's base attack time is improved to 1.4.\n\nTroll Warlord gains 1 armor per 30 bonus attack speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Whirling Axes (Ranged)",
      "image": "/images/abilities/troll_warlord_whirling_axes_ranged.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Troll hurls a fistful of five axes in a cone shape over 950 range, slowing and damaging enemy units.",
      "manaCost": "50",
      "cooldown": "9"
    },
    {
      "name": "Whirling Axes (Melee)",
      "image": "/images/abilities/troll_warlord_whirling_axes_melee.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Troll hurls two axes around him in a close range area of effect, damaging enemy units and causing them to miss some attacks.",
      "manaCost": "50",
      "cooldown": "9"
    },
    {
      "name": "Fervor",
      "image": "/images/abilities/troll_warlord_fervor.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "With each continuous blow on the same target, Troll gains increased attack speed. If Troll changes targets, the stacks drop to zero.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Berserker's Rage",
      "image": "/images/abilities/troll_warlord_berserkers_rage.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "While in melee form, Troll Warlord's attacks have a chance to ensnare, preventing the target from moving or using mobility spells and has additional movement speed.\n\nWhen in ranged form, Troll Warlord's attacks have a chance to Maim the target, dealing bonus damage, and slowing the target's movement and attack speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Battle Trance",
      "image": "/images/abilities/troll_warlord_battle_trance.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Troll unleashes a powerful battle trance, that forces you to continuously attack the closest enemy unit within 900 range, prioritizing heroes. Damage does not kill you during this mode. Grants you bonus lifesteal, attack speed and movement speed. Applies a Basic Dispel.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "150",
      "cooldown": "90 / 80 / 70"
    }
  ],
  "Centaur Warrunner": [
    {
      "name": "Hoof Stomp",
      "image": "/images/abilities/centaur_hoof_stomp.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "After a brief windup, Centaur Warrunner slams the ground, stunning and damaging nearby enemy units. During the delay, he is disarmed but can move.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "18 / 16 / 14 / 12"
    },
    {
      "name": "Double Edge",
      "image": "/images/abilities/centaur_double_edge.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Centaur strikes a mighty blow at melee range, damaging both himself and a small area around the target. Deals extra damage based on your strength. Centaur cannot die from Double Edge.",
      "manaCost": "0 / 0 / 0 / 0",
      "cooldown": "3.5"
    },
    {
      "name": "Retaliate",
      "image": "/images/abilities/centaur_return.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Centaur counters all attacks, dealing damage back to the attacker. Returns a fixed amount plus a percentage of your strength. Deals half damage to towers.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Work Horse",
      "image": "/images/abilities/centaur_work_horse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Centaur hitches a cart behind him. While active, Centaur gains the benefit of Stampede for the current level of Stampede, and can cast Hitch a Ride on a target ally.",
      "manaCost": "75",
      "cooldown": "35"
    },
    {
      "name": "Hitch A Ride",
      "image": "/images/abilities/centaur_mount.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Centaur tosses an ally into a cart hitched behind him. While in the cart, the ally is invulnerable and can still cast and attack normally, but cannot move independently or be targeted by opponents. Increases the attack range of melee heroes by 200.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Stampede",
      "image": "/images/abilities/centaur_stampede.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Centaur leads all allies into a vicious charge causing them to move through units at max speed and slow any enemy units they trample. Trampled enemies take damage based on Centaur Warrunner's strength. Each enemy can be trampled once.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "100 / 95 / 90"
    },
    {
      "name": "Horsepower",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Centaur Warrunner gains 30% of his strength as bonus movement speed.\n\n This Movement speed bonus does not stack with bonuses from boots.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Magnus": [
    {
      "name": "Shockwave",
      "image": "/images/abilities/magnataur_shockwave.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Magnus sends out a wave of force, damaging enemy units in a line, pulling them towards him, and slowing them for a brief period.",
      "manaCost": "85 / 90 / 95 / 100",
      "cooldown": "13 / 12 / 11 / 10"
    },
    {
      "name": "Empower",
      "image": "/images/abilities/magnataur_empower.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "When cast on an ally, grants them bonus damage and cleave on attack. \n\n Empower is always on Magnus with 30% larger bonus.",
      "manaCost": "45 / 55 / 65 / 75",
      "cooldown": "8"
    },
    {
      "name": "Skewer",
      "image": "/images/abilities/magnataur_skewer.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Magnus rushes forward, goring enemy units on his massive tusk. Heroes hit on the way will be dragged to the destination, then damaged and affected by slowed movement speed. The damage is increased based on distance traveled.",
      "manaCost": "80 / 80 / 80 / 80",
      "cooldown": "22 / 20 / 18 / 16"
    },
    {
      "name": "Horn Toss",
      "image": "/images/abilities/magnataur_horn_toss.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Magnus tosses any enemies in front of him, launching them to his rear. Enemies take damage, spend 0.6 seconds in the air, and are stunned while in the air and an additional amount of time after landing.",
      "manaCost": "100",
      "cooldown": "30"
    },
    {
      "name": "Solid Core",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Magnus has increased slow resistance and suffers less knockback from enemy's abilities and items.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Reverse Polarity",
      "image": "/images/abilities/magnataur_reverse_polarity.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "",
      "manaCost": "150 / 225 / 300",
      "cooldown": "115"
    }
  ],
  "Timbersaw": [
    {
      "name": "Whirling Death",
      "image": "/images/abilities/shredder_whirling_death.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Timbersaw whirls extremely sharp edges, damaging enemies and destroying trees around him in an area. If an enemy hero is affected, it loses some of its primary attribute for a short duration. Whirling Death will deal bonus damage per tree destroyed.",
      "manaCost": "100",
      "cooldown": "7.5 / 7 / 6.5 / 6"
    },
    {
      "name": "Timber Chain",
      "image": "/images/abilities/shredder_timber_chain.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Timbersaw fires a chain that embeds itself in the first tree it hits, pulling him towards it. Any enemy in the path takes damage.",
      "manaCost": "60 / 70 / 80 / 90",
      "cooldown": "4"
    },
    {
      "name": "Reactive Armor",
      "image": "/images/abilities/shredder_reactive_armor.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Each time Timbersaw is attacked, he gains increased health regen and armor. Hero attacks are counted as 4x the amount.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Flamethrower",
      "image": "/images/abilities/shredder_flamethrower.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Releases a flame in the direction Timbersaw is facing. Applies a debuff that deals damage per second and slows enemy movement speed. Affects buildings for reduced damage.",
      "manaCost": "100",
      "cooldown": "20"
    },
    {
      "name": "Chakram",
      "image": "/images/abilities/shredder_chakram.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Fires Timbersaw's main saw blade at the target location where it will spin in place, dealing damage in an area around it. Enemies caught in the saw blade will move more slowly for every 5% of health missing. The blade deals damage and cuts down trees in its path when fired and retracted. While active the ability costs mana, and Timbersaw loses the ability to attack.",
      "manaCost": "90 / 120 / 150",
      "cooldown": "8 / 8 / 8"
    },
    {
      "name": "Return Chakram",
      "image": "/images/abilities/shredder_return_chakram.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Returns the Chakram to Timbersaw.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Exposure Therapy",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever Timbersaw destroys a tree, he gains mana.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Bristleback": [
    {
      "name": "Viscous Nasal Goo",
      "image": "/images/abilities/bristleback_viscous_nasal_goo.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Covers a target in snot, causing it to have reduced armor and movement speed for 5 seconds. Multiple casts stack and refresh the duration.",
      "manaCost": "12 / 16 / 20 / 24",
      "cooldown": "1.75"
    },
    {
      "name": "Quill Spray",
      "image": "/images/abilities/bristleback_quill_spray.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Sprays enemy units with quills dealing damage in an area of effect around Bristleback. Deals bonus damage for every time a unit was hit by Quill Spray in the last 14 seconds.",
      "manaCost": "35 / 35 / 35 / 35",
      "cooldown": "3 / 3 / 3 / 3"
    },
    {
      "name": "Bristleback",
      "image": "/images/abilities/bristleback_bristleback.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Bristleback takes less damage if hit on the sides or rear. If Bristleback takes enough damage from the rear, he releases a Quill Spray of the current level.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Hairball",
      "image": "/images/abilities/bristleback_hairball.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Coughs a quill-packed hairball towards the target location. Erupts at the location, hitting enemies with Viscous Nasal Goo stacks and Quill Spray.",
      "manaCost": "60",
      "cooldown": "15"
    },
    {
      "name": "Warpath",
      "image": "/images/abilities/bristleback_warpath.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Bristleback works himself up into a fury every time he casts a spell, increasing his movement speed and damage.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Prickly",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Bristleback has bonus damage and debuff duration amp against enemy heroes that are behind him.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Tusk": [
    {
      "name": "Ice Shards",
      "image": "/images/abilities/tusk_ice_shards.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tusk compresses shards of ice into a ball of frozen energy that damages all enemies it comes in contact with. When the ball reaches its target destination the shards are released, creating a barrier that lasts for 4 seconds.",
      "manaCost": "100",
      "cooldown": "23 / 20 / 17 / 14"
    },
    {
      "name": "Snowball",
      "image": "/images/abilities/tusk_snowball.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tusk begins rolling into a snowball. Allies within a 325 radius can also be added to the snowball by right-clicking on them, even while the snowball is moving. Once launched, any enemies caught in the snowball's path will be stunned and take damage. Each allied Hero in the snowball will add to its damage and stun duration.",
      "manaCost": "75 / 75 / 75 / 75",
      "cooldown": "21 / 19 / 17 / 15"
    },
    {
      "name": "Tag Team",
      "image": "/images/abilities/tusk_tag_team.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Activate to temporarily apply a negative debuff aura around you, causing enemies that are attacked under it to take bonus physical damage and reduced movement speed. Lasts 6 seconds.",
      "manaCost": "70",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Drinking Buddies",
      "image": "/images/abilities/tusk_drinking_buddies.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tusk reaches out to tag an allied unit, pulling them closer. Once tagged, both Tusk and his tagged ally gain movement speed and armor. Can be put on alt-cast to only pull Tusk towards his ally with 50% reduced cast range.",
      "manaCost": "80",
      "cooldown": "14"
    },
    {
      "name": "Walrus Kick",
      "image": "/images/abilities/tusk_walrus_kick.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Kicks the closest enemy unit in the drawn direction, stunning, damaging, and slowing them. Also deals damage to all heroes within 250 radius of its landing area. Cooldown is reduced by 50% if kicking a creep.",
      "manaCost": "100",
      "cooldown": "12"
    },
    {
      "name": "Walrus PUNCH!",
      "image": "/images/abilities/tusk_walrus_punch.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Tusk connects with his mighty Walrus Punch, a critical strike with bonus damage so powerful it launches its victim into the air.",
      "manaCost": "75",
      "cooldown": "16 / 13 / 10"
    },
    {
      "name": "Launch Snowball",
      "image": "",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launch the snowball toward the target.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Bitter Chill",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Passively slows the attack speed of all enemy heroes within a 350 unit radius.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Skywrath Mage": [
    {
      "name": "Arcane Bolt",
      "image": "/images/abilities/skywrath_mage_arcane_bolt.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Skywrath Mage launches a slow-moving bolt of arcane magic, dealing damage to an enemy unit based on Skywrath Mage's intelligence.",
      "manaCost": "70",
      "cooldown": "5 / 4 / 3 / 2"
    },
    {
      "name": "Concussive Shot",
      "image": "/images/abilities/skywrath_mage_concussive_shot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Skywrath Mage sets off a long range shot that hits the closest hero within a long range. Upon impact, it deals damage and slows in an area of effect.",
      "manaCost": "80 / 85 / 90 / 95",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Ancient Seal",
      "image": "/images/abilities/skywrath_mage_ancient_seal.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Skywrath Mage seals the targeted unit with an ancient rune, silencing it and causing it to take additional damage from spells.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "14"
    },
    {
      "name": "Shield of the Scion",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Every time Skywrath Mage deals magical damage to an enemy hero with his abilities, he gains a small magic damage barrier. Each buff stacks independently.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Mystic Flare",
      "image": "/images/abilities/skywrath_mage_mystic_flare.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Skywrath Mage uses his ultimate magical ability to conjure a precise and violent mystical field that lays waste to his adversaries. Deals massive damage distributed evenly among any Heroes in the area over 2 seconds.",
      "manaCost": "300 / 550 / 800",
      "cooldown": "55 / 35 / 15"
    }
  ],
  "Abaddon": [
    {
      "name": "Mist Coil",
      "image": "/images/abilities/abaddon_death_coil.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
      "manaCost": "50 / 55 / 60 / 65",
      "cooldown": "8 / 7 / 6 / 5"
    },
    {
      "name": "Aphotic Shield",
      "image": "/images/abilities/abaddon_aphotic_shield.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons dark energies around an ally unit, dispelling them and creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "110 / 120 / 130 / 140",
      "cooldown": "12 / 10 / 8 / 6"
    },
    {
      "name": "Curse of Avernus",
      "image": "/images/abilities/abaddon_frostmourne.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Abaddon strikes an enemy, affecting them by a chilling curse, slowing them, causing them to take damage over time, and all attacks against them gain an attack speed boost. Damage over time component to buildings is reduced by 100%.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Withering Mist",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Damaging enemies applies the Withering Mist debuff for 5s. Affected enemies have their Health Restoration reduced by 24.5% if they are below 40% HP.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Borrowed Time",
      "image": "/images/abilities/abaddon_borrowed_time.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "When activated, dispels you and all damage dealt to you will heal instead of harm. If the ability is not on cooldown, it will automatically activate if your health falls below 400.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "0 / 0 / 0",
      "cooldown": "85 / 75 / 65"
    }
  ],
  "Elder Titan": [
    {
      "name": "Echo Stomp",
      "image": "/images/abilities/elder_titan_echo_stomp.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Elder Titan and his Astral Spirit both stomp the ground, damaging and knocking nearby enemy units unconscious around their locations. The Elder Titan stomp deals physical damage, while the Spirit stomp deals magical damage.",
      "manaCost": "100",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "Astral Spirit",
      "image": "/images/abilities/elder_titan_ancestral_spirit.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Elder Titan sends forth his Astral Spirit, damaging any units it passes through. When the spirit rejoins the Titan, it grants bonus damage and movement speed for each unit it passed through.\n\nThe Astral Spirit possesses the Echo Stomp, Return Spirit, and Natural Order abilities.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "23 / 21 / 19 / 17"
    },
    {
      "name": "Natural Order",
      "image": "/images/abilities/elder_titan_natural_order.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Reduces all elements to their basic levels, removing base armor and magic damage resistance from nearby enemy units. The armor reduction is centered around the hero, while the magic armor reduction is centered around Astral Spirit.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Move Astral Spirit",
      "image": "/images/abilities/elder_titan_move_spirit.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Moves the Astral Spirit to target location.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Momentum",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Elder Titan gains armor equal to a percentage of his bonus movement speed.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Earth Splitter",
      "image": "/images/abilities/elder_titan_earth_splitter.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Sends forth a jagged crack in front of Elder Titan. After 3 seconds, the crack implodes, slowing movement while dealing damage to each enemy based on their maximum life. Half of the damage dealt is Magical damage, while the other half is Physical damage.",
      "manaCost": "125 / 175 / 225",
      "cooldown": "100 / 95 / 90"
    },
    {
      "name": "Return Astral Spirit",
      "image": "/images/abilities/elder_titan_return_spirit.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Returns the Astral Spirit to Elder Titan.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Legion Commander": [
    {
      "name": "Overwhelming Odds",
      "image": "/images/abilities/legion_commander_overwhelming_odds.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Turns the foes' numbers against them, dealing a 100% impact slow for 0.3s and damage to all enemies in the area. Damage increases with each enemy unit or hero in the area, and grants Legion Commander bonus attack speed.",
      "manaCost": "90 / 105 / 120 / 135",
      "cooldown": "18"
    },
    {
      "name": "Press The Attack",
      "image": "/images/abilities/legion_commander_press_the_attack.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Removes debuffs and disables from the target friendly unit, and grants bonus movement speed and health regen for a short time.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "90",
      "cooldown": "16 / 15 / 14 / 13"
    },
    {
      "name": "Moment of Courage",
      "image": "/images/abilities/legion_commander_moment_of_courage.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "When attacked a number of times, Legion Commander will counter-attack her target with bonus lifesteal.",
      "manaCost": "0",
      "cooldown": "0.3"
    },
    {
      "name": "Outfight Them!",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Passively grants Legion Commander armor.\n\nIf Legion or an allied Hero within 1200 range casts an ability, they gain bonus armor for 6s; allies gain 50% of the value. This bonus stacks independently.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Duel",
      "image": "/images/abilities/legion_commander_duel.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Legion Commander and the target enemy hero are forced to attack each other for a short duration. Neither hero can use items, and the target enemy hero cannot use abilities. If either hero dies during the duration, the hero winning the Duel gains permanent bonus damage.",
      "manaCost": "80 / 100 / 120",
      "cooldown": "60 / 55 / 50"
    }
  ],
  "Techies": [
    {
      "name": "Sticky Bomb",
      "image": "/images/abilities/techies_sticky_bomb.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Lobs a Sticky Bomb towards the target area. If it lands next to an enemy hero, the bomb will stick to it, slowing its movement speed. After a few seconds the bomb will explode, dealing damage in an area around the detonation and applying a secondary slow for 3 seconds.",
      "manaCost": "100 / 115 / 130 / 145",
      "cooldown": "16 / 13 / 10 / 7"
    },
    {
      "name": "Reactive Tazer",
      "image": "/images/abilities/techies_reactive_tazer.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Techies trigger an electric charge on the target ally, giving them bonus movement speed for a short period of time. Enemies attacking the target take damage and are temporarily disarmed and get a Basic Dispel.\n\nAt the end of the effect or if detonated early with the sub-ability, the charge explodes, disarming all enemies within the radius and dealing damage.",
      "manaCost": "60",
      "cooldown": "26 / 22 / 18 / 14"
    },
    {
      "name": "Blast Off!",
      "image": "/images/abilities/techies_suicide.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Techies hurtle themselves into the enemy's midst, detonating charges upon impact which deal massive area of effect damage and stun enemies. Upon landing, the assault deals Techies non-lethal damage equal to a percentage of their current health.",
      "manaCost": "100 / 125 / 150 / 175",
      "cooldown": "40 / 35 / 30 / 25"
    },
    {
      "name": "M.A.D.",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Techies gain a percentage of their mana pool as bonus mana regeneration.\n\nWhen Techies die, they leave behind a barrel that explodes after 1.5s, damaging enemies in an area around it. Damage is based on Techies' max mana.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Minefield Sign",
      "image": "/images/abilities/techies_minefield_sign.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Plant a warning sign, causing Proximity Mines within its radius to be invulnerable and deal 15% more damage. Only one sign can exist at a time. Lasts 240 seconds.\n\nWhen an enemy Hero walks within 200 units of a minefield sign, the 1000 units area around the sign will become a minefield for 10 seconds, dealing damage to enemy Heroes any time they move within its area. Minefield Sign is destroyed after this effect ends.",
      "manaCost": "0",
      "cooldown": "60"
    },
    {
      "name": "Proximity Mines",
      "image": "/images/abilities/techies_land_mines.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Plant an invisible mine that cannot be detected by True Sight, but is visible if an enemy is within the active 500 AoE of the mine. Mines detonate if an enemy is standing within the active AoE for 1 seconds dealing damage and temporarily reducing the enemy's Magic Resistance. The explosion deals full damage if the target is within 150 radius and decreases up to 60% on the edge. Deals 30% damage to buildings.",
      "manaCost": "110 / 140 / 170",
      "cooldown": "0"
    },
    {
      "name": "Detonate Tazer",
      "image": "/images/abilities/techies_reactive_tazer_stop.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Detonate Reactive Tazer immediately.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Detonate M.A.D.",
      "image": "/images/abilities/techies_focused_detonate.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Detonate your planted M.A.D.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Ember Spirit": [
    {
      "name": "Searing Chains",
      "image": "/images/abilities/ember_spirit_searing_chains.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ember Spirit unleashes fiery bolas that wrap around nearby enemies, anchoring them in place and dealing damage each second.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "13 / 12 / 11 / 10"
    },
    {
      "name": "Sleight of Fist",
      "image": "/images/abilities/ember_spirit_sleight_of_fist.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ember Spirit dashes around with blazing speed, attacking all enemies in the targeted area of effect, then returning to his start location. Deals bonus damage to heroes.",
      "manaCost": "75",
      "cooldown": "13 / 11 / 9 / 7"
    },
    {
      "name": "Flame Guard",
      "image": "/images/abilities/ember_spirit_flame_guard.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ember Spirit surrounds himself with a ring of fire that consumes incoming magic damage, absorbing a percentage of the damage taken. Flame Guard deals damage per second in an area around Ember Spirit while Flame Guard is active. If the shield is broken, the damage is also lost.",
      "manaCost": "65 / 80 / 95 / 110",
      "cooldown": "32"
    },
    {
      "name": "Activate Fire Remnant",
      "image": "/images/abilities/ember_spirit_activate_fire_remnant.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Select the Fire Remnant to arrive at.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "0"
    },
    {
      "name": "Immolation",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Ember Spirit is continuously burning, dealing damage per second to all nearby enemies at all times.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Fire Remnant",
      "image": "/images/abilities/ember_spirit_fire_remnant.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Sends a Fire Remnant that runs to the target location at 250% Ember Spirit's speed. Using Activate Fire Remnant, Ember Spirit will dash out to all active Fire Remnants, destroying them and dealing damage in an area and then moving to the nearest Remnant. Ember Spirit will end at the Remnant closest to the targeted location.",
      "manaCost": "0",
      "cooldown": "0.5"
    }
  ],
  "Earth Spirit": [
    {
      "name": "Boulder Smash",
      "image": "/images/abilities/earth_spirit_boulder_smash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Earth Spirit smashes the target enemy or ally, sending them in the direction he is facing. If Earth Spirit targets an area, he will smash the nearest unit in a 200 radius, prioritizing Stone Remnants. The travelling unit or Remnant damages all enemy units it hits. If an enemy is hit by a Stone Remnant, they are also slowed. Stone Remnants travel further than other units.",
      "manaCost": "100",
      "cooldown": "20 / 17 / 14 / 11"
    },
    {
      "name": "Rolling Boulder",
      "image": "/images/abilities/earth_spirit_rolling_boulder.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Earth Spirit gathers himself into a boulder and, after a 0.6s delay, rolls toward the target location, dealing 60 + 100% STR damage and stunning enemy units. He will stop if he collides with an enemy hero or is stunned. If he rolls over a Stone Remnant, he will travel further and faster, and stun enemies for longer.",
      "manaCost": "50",
      "cooldown": "16 / 12 / 8 / 4"
    },
    {
      "name": "Geomagnetic Grip",
      "image": "/images/abilities/earth_spirit_geomagnetic_grip.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Earth Spirit pulls the target Stone Remnant or Allied Unit. Enemies struck by the gripped target will be silenced.\n\nPulled Remnants also deal damage to struck enemies.\n\nCast range is reduced when targeting an ally.",
      "manaCost": "75",
      "cooldown": "13"
    },
    {
      "name": "Stone Remnant",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Call a Stone Remnant to the target location. Stone Remnants have no vision and are invulnerable, and can be used with Earth Spirit's abilities. Calling a Stone Remnant consumes a charge, which recharge over time. Stone Remnant has 7 charges.\n\nEarth Spirit passively gains 2.5% bonus damage per unused Stone Remnant charge, and gains an additional 7.5% bonus damage for 10s when a Stone Remnant is targeted with an ability (does not stack).",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Enchant Remnant",
      "image": "/images/abilities/earth_spirit_petrify.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Earth Spirit temporarily enchants a hero, granting them the properties of a Stone Remnant. After a short duration the remnant shatters, releasing the hero and damaging nearby enemies. \nCan be cast on Stone Remnants. Has a 5 second cooldown when used that way.\nHas a larger cast range when cast on an ally hero.",
      "manaCost": "150",
      "cooldown": "45"
    },
    {
      "name": "Magnetize",
      "image": "/images/abilities/earth_spirit_magnetize.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Magnetizes units in a small nearby area, causing them to take damage for a short duration. Magnetized heroes cause nearby Stone Remnants to explode, destroying the remnant and refreshing Magnetize's duration on all nearby enemies. This process can repeat multiple times. If an enemy hero is affected by Geomagnetic Grip or Boulder Smash, all magnetized heroes share the effects.",
      "manaCost": "100",
      "cooldown": "100 / 90 / 80"
    }
  ],
  "Underlord": [
    {
      "name": "Firestorm",
      "image": "/images/abilities/abyssal_underlord_firestorm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Calls down waves of fire that damage enemy units in the target area, burning for additional damage over time.",
      "manaCost": "110 / 125 / 140 / 155",
      "cooldown": "16 / 15 / 14 / 13"
    },
    {
      "name": "Pit of Malice",
      "image": "/images/abilities/abyssal_underlord_pit_of_malice.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "A deadly pit is conjured at the target location; any unit that enters will be damaged and rooted. Each enemy unit within the pit are affected by the root only every 3.6 seconds.",
      "manaCost": "110 / 120 / 130 / 140",
      "cooldown": "30 / 25 / 20 / 15"
    },
    {
      "name": "Atrophy Aura",
      "image": "/images/abilities/abyssal_underlord_atrophy_aura.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Nearby enemy units are weakened, losing a portion of their base damage. If an enemy dies while under this effect, Underlord gains temporary bonus damage.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Invading Force",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "After an allied hero Teleports, they temporarily gain Damage Reduction and Movement Speed. Allies receive 2x bonuses if teleporting via Fiend's Gate.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Fiend's Gate",
      "image": "/images/abilities/abyssal_underlord_dark_portal.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Opens 2 portals, one next to Underlord and one in the target location. Heroes can channel a portal for 3.5 seconds to teleport to the other side. Portals have to be at least 1500 away from each other.",
      "manaCost": "175",
      "cooldown": "110 / 105 / 100"
    }
  ],
  "Terrorblade": [
    {
      "name": "Reflection",
      "image": "/images/abilities/terrorblade_reflection.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Terrorblade brings forth an invulnerable dark reflection of all enemy heroes in a target area. Affected enemy heroes have movement and attack speeds slowed and attacked by their reflection.",
      "manaCost": "60 / 65 / 70 / 75",
      "cooldown": "23 / 20 / 17 / 14"
    },
    {
      "name": "Conjure Image",
      "image": "/images/abilities/terrorblade_conjure_image.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Creates an illusion of Terrorblade that deals damage.",
      "manaCost": "50 / 60 / 70 / 80",
      "cooldown": "16"
    },
    {
      "name": "Metamorphosis",
      "image": "/images/abilities/terrorblade_metamorphosis.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Terrorblade transforms into a powerful demon with a ranged attack. Any of Terrorblade's illusions that are within 1200 range will also be transformed by Metamorphosis.",
      "manaCost": "100",
      "cooldown": "145 / 140 / 135 / 130"
    },
    {
      "name": "Demon Zeal",
      "image": "/images/abilities/terrorblade_demon_zeal.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Costs part of Terrorblade's current HP to cast, providing Terrorblade and nearby illusions bonus movement, HP Regen and attack speed. Does not affect Reflection illusions. Can't be cast while in Metamorphosis and Metamorphosis will remove Demon Zeal.",
      "manaCost": "0",
      "cooldown": "45"
    },
    {
      "name": "Terror Wave",
      "image": "/images/abilities/terrorblade_terror_wave.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Causes a wave to travel outwards in all directions forcing enemy heroes to become Feared upon impact and dealing damage, and grants Terrorblade Metamorphosis for a short time.",
      "manaCost": "75",
      "cooldown": "90"
    },
    {
      "name": "Sunder",
      "image": "/images/abilities/terrorblade_sunder.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Severs the life from both Terrorblade and a target hero, exchanging a percentage of both units' current health. Some health points must remain.",
      "manaCost": "100 / 75 / 50",
      "cooldown": "110 / 75 / 40"
    },
    {
      "name": "Dark Unity",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Nearby Illusions created by Terrorblade have bonus attack damage.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Phoenix": [
    {
      "name": "Icarus Dive",
      "image": "/images/abilities/phoenix_icarus_dive.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Phoenix dives forward in an arc with a fixed distance in the targeted direction, dealing damage over time and slowing the movement speed of any units it comes into contact with, and then orbiting back to its original position. If Phoenix casts Supernova, the dive ends.",
      "manaCost": "0",
      "cooldown": "40 / 35 / 30 / 25"
    },
    {
      "name": "Fire Spirits",
      "image": "/images/abilities/phoenix_fire_spirits.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons 4 fire spirits that circle around Phoenix. Each spirit can be launched independently at a targeted area of effect. Affected enemy units take damage over time and have their attack speed greatly reduced.",
      "manaCost": "100",
      "cooldown": "50 / 40 / 30 / 20"
    },
    {
      "name": "Sun Ray",
      "image": "/images/abilities/phoenix_sun_ray.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Phoenix expels a beam of light at the cost of its own health. The beam damages enemies and heals allies for a base amount plus a percentage of their health. The percentage increases as the beam continues to fire.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "30"
    },
    {
      "name": "Toggle Movement",
      "image": "/images/abilities/phoenix_sun_ray_toggle_move.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Toggles slow forward movement during Sun Ray firing.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Dying Light",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Phoenix deals 4% of its missing health as magic damage to all enemies in a 400 radius every second.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Supernova",
      "image": "/images/abilities/phoenix_supernova.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "The Phoenix willingly ends its current life for the chance to be reborn. Transforms into a burning sun that scorches enemies in a huge area. The sun can be destroyed by attacks from enemy Heroes. After 6 seconds the sun explodes, stunning all nearby enemies while restoring Phoenix to full health and mana with refreshed abilities.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "150 / 200 / 250",
      "cooldown": "120"
    },
    {
      "name": "Launch Fire Spirit",
      "image": "/images/abilities/phoenix_launch_fire_spirit.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Each fire spirit can be launched independently at a targeted area of effect. Affected enemy units take damage over time and have their attack speed greatly reduced.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Stop Icarus Dive",
      "image": "/images/abilities/phoenix_icarus_dive_stop.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Immediately cancels the dive.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Stop Sun Ray",
      "image": "/images/abilities/phoenix_sun_ray_stop.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Immediately stops the Sun Ray.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Oracle": [
    {
      "name": "Fortune's End",
      "image": "/images/abilities/oracle_fortunes_end.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Gathers Oracle's power into a bolt of scouring energy that, when released, damages, roots, and dispels enemies of buffs in an area around the target. If target is an ally it will only dispel debuffs. The root duration increases with channeling time.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "80",
      "cooldown": "18 / 14 / 10 / 6"
    },
    {
      "name": "Fate's Edict",
      "image": "/images/abilities/oracle_fates_edict.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Oracle enraptures a target, disarming them and granting them 100% magic damage resistance.",
      "manaCost": "70",
      "cooldown": "17 / 14 / 11 / 8"
    },
    {
      "name": "Purifying Flames",
      "image": "/images/abilities/oracle_purifying_flames.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Burns away impurities, dealing heavy magic damage to the target before causing them to regenerate health over time. The amount of health regenerated over its duration exceeds the amount of initial damage. Can be cast on enemies and allies.",
      "manaCost": "75",
      "cooldown": "2.5"
    },
    {
      "name": "Rain of Destiny",
      "image": "/images/abilities/oracle_rain_of_destiny.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Brings forth rain to the target area. Enemies standing in the area receive damage and have reduced Heal Amplification. Allies in the area heal and have increased incoming Heal Amplification.",
      "manaCost": "150",
      "cooldown": "40"
    },
    {
      "name": "Diviner's Deck",
      "image": "/images/abilities/oracle_diviners_deck.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "False Promise",
      "image": "/images/abilities/oracle_false_promise.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Temporarily alters an ally's destiny, delaying any healing or damage taken until False Promise ends. Any healing that is delayed by False Promise is amplified. Removes most negative status effects and disables on initial cast.\n\nDISPEL TYPE: Strong Dispel",
      "manaCost": "100 / 150 / 200",
      "cooldown": "110 / 85 / 60"
    },
    {
      "name": "Prognosticate",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Winter Wyvern": [
    {
      "name": "Arctic Burn",
      "image": "/images/abilities/winter_wyvern_arctic_burn.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Winter Wyvern soars upon an arctic wind, granting her unobstructed movement and allowing her to exhale a blistering chill into each attack. While soaring, her attacks travel further and faster, and slow enemies with a magical freeze that strips them of 4% of their current health each second.",
      "manaCost": "100",
      "cooldown": "29 / 26 / 23 / 20"
    },
    {
      "name": "Splinter Blast",
      "image": "/images/abilities/winter_wyvern_splinter_blast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Launches a ball of brittle ice toward a unit. The ice shatters on impact, leaving the primary target completely unaffected, while hurling damaging splinters into nearby enemies in a 500 base radius. Enemies struck by these splinters are slowed by 28%.",
      "manaCost": "105 / 115 / 125 / 135",
      "cooldown": "6"
    },
    {
      "name": "Cold Embrace",
      "image": "/images/abilities/winter_wyvern_cold_embrace.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Encases an ally in an icy cocoon, freezing them solid while healing a base amount as well as a percentage of their maximum health each second. The cocoon blocks all physical damage.",
      "manaCost": "50 / 60 / 70 / 80",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Eldwurm's Edda",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Winter's Curse",
      "image": "/images/abilities/winter_wyvern_winters_curse.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Winter Wyvern dispells then freezes an enemy in place while striking those nearby with a maddening curse which causes them to attack their frozen ally with increased attack speed. The frozen ally and those cursed to attack their ally are immune to all damage from their enemies with the exception of damage from Winter Wyvern or her controlled units.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "100 / 90 / 80"
    }
  ],
  "Arc Warden": [
    {
      "name": "Flux",
      "image": "/images/abilities/arc_warden_flux.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Infuses a lone enemy unit with swirling, volatile energy, dealing damage over time and slowing the target. The damage is not applied if another enemy unit is near the target.",
      "manaCost": "75",
      "cooldown": "16"
    },
    {
      "name": "Magnetic Field",
      "image": "/images/abilities/arc_warden_magnetic_field.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Arc Warden generates a circular distortion field of magnetic energy. The Magnetic Field grants bonus attack speed and protects allied units within it by evading attacks coming from outside the field. The Magnetic Field pulls runes, and runes inside Magnetic Field automatically activate.",
      "manaCost": "60 / 70 / 80 / 90",
      "cooldown": "20 / 19 / 18 / 17"
    },
    {
      "name": "Spark Wraith",
      "image": "/images/abilities/arc_warden_spark_wraith.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a Spark Wraith that slowly materializes and patrols a targeted area until an enemy comes within its range. Once a target has been found the wraith fuses with them, dealing magical damage and slowing the unit.",
      "manaCost": "80",
      "cooldown": "4 / 4 / 4 / 4"
    },
    {
      "name": "Runic Infusion",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Runes of Power fuse to the Self. Arc Warden gains +1.5 all attributes permanently whenever Arc Warden or the Tempest Double activates a Power Rune.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Tempest Double",
      "image": "/images/abilities/arc_warden_tempest_double.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Briefly refocusing its fractured elements into a single form, the Arc Warden is able to create a perfect electrical duplication of itself. The duplicate can use all of Arc Warden's current items and spells, except most consumables and items that drop on death. The duplicate has separate item and ability cooldowns.\n\nThe Tempest Double loses its sense of self and fractures over time, becoming slower and less accurate.",
      "manaCost": "0",
      "cooldown": "60 / 55 / 50"
    }
  ],
  "Monkey King": [
    {
      "name": "Boundless Strike",
      "image": "/images/abilities/monkey_king_boundless_strike.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Monkey King enlarges his staff and slams it against the ground, stunning enemies in a line and damaging them with bonus damage and a critical hit based on his attack. Has True Strike.",
      "manaCost": "85 / 90 / 95 / 100",
      "cooldown": "24 / 21 / 18 / 15"
    },
    {
      "name": "Tree Dance",
      "image": "/images/abilities/monkey_king_tree_dance.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Monkey King jumps to a tree and perches atop it. While perched, he gains the Primal Spring ability-a channeled leap attack. If Monkey King's tree is destroyed, he falls and is stunned for 3s. Taking damage while on the ground puts Tree Dance on cooldown.",
      "manaCost": "0",
      "cooldown": "0.9 / 0.6 / 0.3 / 0"
    },
    {
      "name": "Primal Spring",
      "image": "/images/abilities/monkey_king_primal_spring.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Monkey King springs out from his tree perch, damaging and slowing enemies in the area where he lands. Damage and slow amounts are in proportion to channel duration.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Jingu Mastery",
      "image": "/images/abilities/monkey_king_jingu_mastery.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Monkey King's attacks awaken the Jingu Bang's power. Upon the fourth hit on the same enemy hero, Monkey King earns 4 charged attacks that have bonus damage and lifesteal.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Mischief",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Changes Monkey King's shape to deceive opponents, using the environment nearby as inspiration for the disguise. Taking damage, attacking, or using any item or ability breaks Monkey King's disguise. Grants damage immunity for 0.1 seconds upon transforming.",
      "manaCost": "0 / 0 / 0 / 0",
      "cooldown": "24.5"
    },
    {
      "name": "Wukong's Command",
      "image": "/images/abilities/monkey_king_wukongs_command.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Monkey King creates a circular formation of soldiers that spread out from his position. If Monkey King leaves the area his soldiers disperse. The soldiers have Monkey King's attack that attacks at a fixed rate of 1.1s, and only targets enemy Heroes. Monkey King is granted bonus armor for the spell's duration.\n\nMonkey King can transform into any one of his soldiers during Wukong's command, taking its place for a short duration, becoming indistinguishable from other soldiers, and leaving another soldier in his stead.",
      "manaCost": "100",
      "cooldown": "100 / 90 / 80"
    },
    {
      "name": "Spring Early",
      "image": "",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Dark Willow": [
    {
      "name": "Bramble Maze",
      "image": "/images/abilities/dark_willow_bramble_maze.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dark Willow creates a 500 AoE maze of 8 brambles that grow in the target area after 0.3 seconds. Enemies that walk into a bramble are rooted and take damage over time. Lasts 12 seconds.",
      "manaCost": "100 / 120 / 140 / 160",
      "cooldown": "22"
    },
    {
      "name": "Shadow Realm",
      "image": "/images/abilities/dark_willow_shadow_realm.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dark Willow recedes into the shadows, becoming untargetable. Her next attack has 600 bonus attack range and deals bonus magic damage, and will end Shadow Realm. Damage scales based on how long she remains under the effects of Shadow Realm, the maximum being reached after 3 seconds.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "21 / 19 / 17 / 15"
    },
    {
      "name": "Cursed Crown",
      "image": "/images/abilities/dark_willow_cursed_crown.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dark Willow casts an ancient fae curse on the target. After a delay, the target and nearby enemies are stunned.",
      "manaCost": "80 / 90 / 100 / 110",
      "cooldown": "17 / 15 / 13 / 11"
    },
    {
      "name": "Bedlam",
      "image": "/images/abilities/dark_willow_bedlam.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Dark Willow sends her pet wisp to roam around herself for the duration, rapidly attacking nearby enemies. Bedlam cannot be used while Terrorize is active.",
      "manaCost": "100 / 150 / 200",
      "cooldown": "30"
    },
    {
      "name": "Pixie Dust",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Dark Willow gains 20% bonus Health and Mana Regeneration, increased to 100% while she is untargetable or invulnerable.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Terrorize",
      "image": "/images/abilities/dark_willow_terrorize.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Dark Willow releases her pet wisp to terrorize her enemies. After a short delay, all enemies in the target area become fearful and run toward their home fountain. Terrorize cannot be used while Bedlam is active.",
      "manaCost": "150",
      "cooldown": "100 / 90 / 80"
    }
  ],
  "Pangolier": [
    {
      "name": "Swashbuckle",
      "image": "/images/abilities/pangolier_swashbuckle.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Pangolier dashes along the target line, then slashes and briefly slows all enemies in the drawn direction with several quick swipes.\n\nLucky Shot has a chance to activate from this damage.",
      "manaCost": "85 / 90 / 95 / 100",
      "cooldown": "19 / 16 / 13 / 10"
    },
    {
      "name": "Shield Crash",
      "image": "/images/abilities/pangolier_shield_crash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Pangolier jumps in the air and slams back to the ground in front of his current position damaging all enemies in a radius. Pangolier gains an all damage barrier for a short time if Shield Crash hits an enemy hero.\n\nForward movement is maintained if Shield Crash is used while Rolling Thunder is active, and allows Rolling Thunder to clear walls or cliffs.",
      "manaCost": "75",
      "cooldown": "15 / 12 / 9 / 6"
    },
    {
      "name": "Lucky Shot",
      "image": "/images/abilities/pangolier_lucky_shot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Pangolier rolls the dice and lets fate decide the outcome for his enemies. Grants a chance to drastically slow their attack speed and reduce armor on any damage dealt by Pangolier's attacks or abilities.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Roll Up",
      "image": "/images/abilities/pangolier_rollup.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Pangolier curls into an immobile protective ball, gaining debuff immunity, 80% magic resistance, and allowing him to turn. Can be cast during Rolling Thunder to temporarily hit the brakes. Can cast Rolling Thunder and Shield Crash during Roll Up. If enemies attack Pangolier during this, he will roll away from the attacker, applying Rolling Thunder damage/stun if there are enemies in the way.",
      "manaCost": "75",
      "cooldown": "40"
    },
    {
      "name": "Rolling Thunder",
      "image": "/images/abilities/pangolier_gyroshell.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Pangolier curls into a debuff immune ball with 80% magic resistance and rolls out. When rolling, he moves at an increased speed and can move through trees, but has a decreased ability to turn. Striking enemies knocks them back, inflicting damage proportional to his attack damage and stunning them when they land. \n\nColliding with walls or cliffs will cause a temporary pause while Pangolier reverses in direction.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "100 / 125 / 150",
      "cooldown": "100 / 90 / 80"
    },
    {
      "name": "Stop Rolling",
      "image": "/images/abilities/pangolier_gyroshell_stop.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Halt!",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "End Roll Up",
      "image": "/images/abilities/pangolier_rollup_stop.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ends Pangolier's Roll Up early.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Fortune Favors the Bold",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Random item and ability effects of enemies near Pangolier have a reduced chance to affect him.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Grimstroke": [
    {
      "name": "Stroke of Fate",
      "image": "/images/abilities/grimstroke_dark_artistry.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Grimstroke paints a curved path of ink with his brush, damaging and slowing enemies. The damage is increased with each enemy the ink hits.\n\n Can be put on alt-cast to have the path be straight.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "11 / 9 / 7 / 5"
    },
    {
      "name": "Phantom's Embrace",
      "image": "/images/abilities/grimstroke_ink_creature.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Summons a phantom that moves quickly towards the target, latching to it when she arrives. Once latched, the phantom damages and silences. If she survives the full latch duration she rends her victim for heavy damage and refreshes Phantom's Embrace's cooldown.\n\nHero attacks against the phantom count as 3 attacks each.",
      "manaCost": "80 / 100 / 120 / 140",
      "cooldown": "30 / 26 / 22 / 18"
    },
    {
      "name": "Ink Swell",
      "image": "/images/abilities/grimstroke_spirit_walk.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Grimstroke shrouds an allied unit in ink, increasing its movement speed. Enemies in range of the allied unit are damaged with inky tendrils over time. After 3 seconds it applies damage and stun in an area around the unit in proportion to how long ink tendril was near any hero.",
      "manaCost": "120 / 130 / 140 / 150",
      "cooldown": "27 / 24 / 21 / 18"
    },
    {
      "name": "Dark Portrait",
      "image": "/images/abilities/grimstroke_dark_portrait.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "200",
      "cooldown": "35"
    },
    {
      "name": "Soulbind",
      "image": "/images/abilities/grimstroke_soul_chain.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Binds a targeted enemy hero to its nearest allied hero within the bind radius, preventing both from moving away from each other. Any unit-targeted ability that either bound hero receives also gets cast on the other hero. If the bind is broken before the duration expires, the initial target will be bound to its nearest allied hero in the radius.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "70 / 65 / 60"
    },
    {
      "name": "Ink Trail",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Grimstroke's attacks and spells cause affected enemy heroes to leave a trail of Ink behind them and deal less damage to Grimstroke for 4s.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Hoodwink": [
    {
      "name": "Acorn Shot",
      "image": "/images/abilities/hoodwink_acorn_shot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Fires Hoodwink's attack with an acorn at the target unit. The acorn bounces to nearby targets, slowing them and dealing a percentage of Hoodwink's attack with bonus damage.\nIf point targeted, a tree is created at the target position and the acorn will bounce to nearby targets. The ability may be placed on alt-cast to force this behavior.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "19 / 16 / 13 / 10"
    },
    {
      "name": "Bushwhack",
      "image": "/images/abilities/hoodwink_bushwhack.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tosses a net trap that stuns enemies if they are near a tree in the area. Affected enemies take damage over time and are pulled towards the tree nearest to them within the target area, and have their vision reduced to 0 for the duration of the stun.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "15 / 14 / 13 / 12"
    },
    {
      "name": "Scurry",
      "image": "/images/abilities/hoodwink_scurry.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Hoodwink gains bonus movement speed, phased movement, and tree-walking for a brief time. While active, the redirect chance of Mistwoods Wayfarer is multiplied by 2.",
      "manaCost": "35",
      "cooldown": "0"
    },
    {
      "name": "Decoy",
      "image": "/images/abilities/hoodwink_decoy.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Hoodwink turns invisible, increasing her movement speed, and creates a decoy illusion that starts aiming a decreased damage Sharpshooter at the nearest enemy hero. If the illusion is attacked or hit by a targeted ability, it is destroyed and it throws a lesser bushwhack towards the enemy.",
      "manaCost": "60",
      "cooldown": "30"
    },
    {
      "name": "Hunter's Boomerang",
      "image": "/images/abilities/hoodwink_hunters_boomerang.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Tosses a boomerang in an arc. Upon contact, it returns to Hoodwink. The boomerang will deal damage as it passes through or hits enemies, and apply a debuff that causes affected enemies to be slowed and be more vulnerable to spell damage.",
      "manaCost": "125",
      "cooldown": "20"
    },
    {
      "name": "Sharpshooter",
      "image": "/images/abilities/hoodwink_sharpshooter.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Hoodwink charges up and fires a deadly bolt from her crossbow, dealing heavy damage, break and slow to an enemy Hero. The damage and debuff duration scale up to max after x0.75 seconds, and the bolt is fired automatically after x0.75 seconds.\nHoodwink is knocked backwards for a distance of 350 from the force of the shot. Creeps hit by the bolt are damaged for half the values.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "45"
    },
    {
      "name": "End Sharpshooter",
      "image": "/images/abilities/hoodwink_sharpshooter_release.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Release the charged up shot, regain ability to move and attack.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Mistwoods Wayfarer",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Void Spirit": [
    {
      "name": "Aether Remnant",
      "image": "/images/abilities/void_spirit_aether_remnant.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Void Spirit dispatches a remnant to the target location. The remnant stands watch over the region, facing the direction of his vector. When a unit crosses its gaze, the remnant pulls it in and damages it.",
      "manaCost": "75 / 80 / 85 / 90",
      "cooldown": "17 / 15 / 13 / 11"
    },
    {
      "name": "Dissimilate",
      "image": "/images/abilities/void_spirit_dissimilate.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Void Spirit temporarily fades into the aether, creating a number of portals through which he can reassemble himself. Upon exiting a portal, he damages all enemies in the area.",
      "manaCost": "120",
      "cooldown": "20 / 17 / 14 / 11"
    },
    {
      "name": "Resonant Pulse",
      "image": "/images/abilities/void_spirit_resonant_pulse.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Void Spirit wraps himself in a protective shield that absorbs physical damage and emits a single damaging pulse around him. The shield gains increased damage absorption for each enemy hero the pulse hits.",
      "manaCost": "115 / 120 / 125 / 130",
      "cooldown": "18"
    },
    {
      "name": "Intrinsic Edge",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Void Spirit gains 15% more attack damage per point of each attribute, and 30% more HP regen from Strength, attack speed from Agility, and mana regen from Intelligence.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Astral Step",
      "image": "/images/abilities/void_spirit_astral_step.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Void Spirit tears a rift through the astral plane to appear at the target location, attacking all enemies along the path. This attack inflicts a void mark that slows for 1.25 seconds and then detonates.",
      "manaCost": "90",
      "cooldown": "0"
    }
  ],
  "Snapfire": [
    {
      "name": "Scatterblast",
      "image": "/images/abilities/snapfire_scatterblast.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Snapfire unloads with a wide blast that damages and slows enemies in a cone. Damage is increased by 30% and Movement Slow, Attack Slow and Slow Duration are increased by 50% for enemies caught at point-blank range.",
      "manaCost": "85 / 90 / 95 / 100",
      "cooldown": "17 / 14 / 11 / 8"
    },
    {
      "name": "Firesnap Cookie",
      "image": "/images/abilities/snapfire_firesnap_cookie.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Snapfire feeds a potent cookie to Mortimer or an ally, causing them to hop a short distance. The hopping unit stuns and damages enemies in the landing zone.",
      "manaCost": "105",
      "cooldown": "18 / 17 / 16 / 15"
    },
    {
      "name": "Lil' Shredder",
      "image": "/images/abilities/snapfire_lil_shredder.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Snapfire heats up her mounted turret to rapidly fire 5 attacks dealing fixed damage plus a percentage of her attack damage. Each attack reduces the enemy's armor. Provides bonus attack range for the duration.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "24 / 20 / 16 / 12"
    },
    {
      "name": "Gobble Up",
      "image": "/images/abilities/snapfire_gobble_up.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Mortimer gobbles up a creep or an allied hero, which he can then spit towards enemies. The unit stays in his belly up to [object Object] seconds.",
      "manaCost": "120",
      "cooldown": "40"
    },
    {
      "name": "Spit Out",
      "image": "/images/abilities/snapfire_spit_creep.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Mortimer spits out the unit that's in his mouth, causing impact damage and stun in a large area. The glob leaves a pool of firespit based on the current level of Mortimer Kisses, that slows and applies damage over time. Spit Out has a no minimum launch range.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Mortimer Kisses",
      "image": "/images/abilities/snapfire_mortimer_kisses.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Snapfire's friend launches a barrage of firespit globs over 5.5 seconds. Globs cause impact damage and create pools of firespit, which slow and apply damage over time. Snapfire has a reduced turn rate for the duration and a minimum launch range of 600. Each glob can be targeted with a right click.",
      "manaCost": "125 / 150 / 175",
      "cooldown": "120 / 110 / 100"
    },
    {
      "name": "Boomstick",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Snapfire deals more damage to nearby enemies.",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Mars": [
    {
      "name": "Spear of Mars",
      "image": "/images/abilities/mars_spear.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Mars throws his legendary Spear with deadly precision, damaging each enemy unit it strikes. The first enemy hero it hits is skewered on the spear, pushing it back. If a skewered hero hits a tree, building, or cliff, they will be impaled to it and stunned.",
      "manaCost": "90 / 100 / 110 / 120",
      "cooldown": "14 / 13 / 12 / 11"
    },
    {
      "name": "God's Rebuke",
      "image": "/images/abilities/mars_gods_rebuke.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Mars smashes enemies in front of him with his shield, knocking them back and damaging them with a critical hit based on his attack. Bonus damage is added when hitting heroes. Has True Strike.",
      "manaCost": "90",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Bulwark",
      "image": "/images/abilities/mars_bulwark.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Mars wields his massive shield to block a portion of each physical attack when hit from the front or sides.\n\n Can be toggled, granting phased movement, removing Mars's ability to attack, and locking the direction he is facing. When active, reduces movement speed and re-directs 70% of the attack projectiles aimed at allies towards himself.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Dauntless",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Mars gets more HP Regen the more he is outnumbered by enemy heroes in 700 radius.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Arena Of Blood",
      "image": "/images/abilities/mars_arena_of_blood.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "After a short formation time, Mars summons an arena lined with the undead warriors of the Ash Legion, who block enemy attacks and movement. Enemy heroes near the inside edge of the arena will be attacked by spears, dealing damage and knocking them back.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "100 / 95 / 90"
    }
  ],
  "Ring Master": [
    {
      "name": "Tame the Beasts",
      "image": "/images/abilities/ringmaster_tame_the_beasts.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "CHANNELED - Ringmaster twirls his whip for up to 1 second then cracks it. Whipped enemies are damaged and flee in fear from Ringmaster. Channel time exponentially increases damage and extends the fear duration, but reduces the radius.",
      "manaCost": "90 / 105 / 120 / 135",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Escape Act",
      "image": "/images/abilities/ringmaster_the_box.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ringmaster packs himself or an allied hero into a mobile, extradimensional box. Boxed units gain phased movement, slow resistance, bonus magic resistance, and bonus movement speed. They are also untargetable, muted, silenced, and disarmed. The box will pop open after the effect expires or it moves out of the initial area.",
      "manaCost": "120",
      "cooldown": "38 / 32 / 26 / 20"
    },
    {
      "name": "Impalement Arts",
      "image": "/images/abilities/ringmaster_impalement.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ringmaster throws one of his daggers to a precise point of his choosing. If he strikes an enemy, the dagger deals impact damage, briefly slows the unit hit, and causes them to bleed. The bleeding deals a percentage of the victim's maximum health in damage every second to heroes and flat damage per second to creeps.",
      "manaCost": "50",
      "cooldown": "1"
    },
    {
      "name": "Souvenir Slot",
      "image": "/images/abilities/ringmaster_empty_souvenir.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Gather souvenirs from kills and assists.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Spotlight",
      "image": "/images/abilities/ringmaster_spotlight.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Ringmaster shines 3 spotlights that sweep over an area. Enemies in the light have a chance to miss their attacks and are revealed if invisible. Illusions hit by the beam fade away, losing a percentage of their maximum health each second. These effects linger for 0.3 seconds after leaving the light.",
      "manaCost": "50",
      "cooldown": "30"
    },
    {
      "name": "Wheel of Wonder",
      "image": "/images/abilities/ringmaster_wheel.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Ringmaster rolls the Wheel of Wonder to the targeted location, knocking aside enemies along the way. After it reaches its target, enemies in range of the wheel take damage over time and are slowed by -50%.\n\nEnemy heroes who face the wheel for more than 0.5 seconds are mesmerized and drawn towards it. The first enemy to be mesmerized triggers a timer for the wheel to explode. If the timer is not triggered, it will automatically explode after 4 seconds.",
      "manaCost": "150 / 225 / 300",
      "cooldown": "90 / 80 / 70"
    },
    {
      "name": "Crack",
      "image": "/images/abilities/ringmaster_tame_the_beasts_crack.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "*CRACK*",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Dawnbreaker": [
    {
      "name": "Starbreaker",
      "image": "/images/abilities/dawnbreaker_fire_wreath.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dawnbreaker whirls her hammer around 3 times, damaging enemies with her attack plus bonus damage. On the final strike, she smashes her hammer down, stunning and damaging enemies in front of her.",
      "manaCost": "110",
      "cooldown": "17 / 15 / 13 / 11"
    },
    {
      "name": "Celestial Hammer",
      "image": "/images/abilities/dawnbreaker_celestial_hammer.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dawnbreaker hurls her weapon at a target, damaging enemies struck along the way. The hammer pauses for 2 seconds at the destination before flying back to her, leaving a trail of fire that slows enemies. Dawnbreaker can recall the hammer at any time, pulling her towards it so they meet in the middle.",
      "manaCost": "100 / 110 / 120 / 130",
      "cooldown": "18 / 16 / 14 / 12"
    },
    {
      "name": "Luminosity",
      "image": "/images/abilities/dawnbreaker_luminosity.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Converge",
      "image": "/images/abilities/dawnbreaker_converge.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Dawnbreaker recalls her hammer, pulling them together so they meet in the middle.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Break of Dawn",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Whenever the sun comes out, Dawnbreaker gains bonus base damage and vision that decreases throughout the course of the day. If Dawnbreaker causes the day these bonuses are at full power for the entirety of that daytime.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Solar Guardian",
      "image": "/images/abilities/dawnbreaker_solar_guardian.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Dawnbreaker creates a pulsing effect at a location within 350 units of an allied hero anywhere on the map and creates daylight for 6s. Each pulse damages enemies and heals allies.\n\nAfter a short duration, she flies to the target location and deals additional damage and stuns enemies upon landing.\n\nOnce channeled, Dawnbreaker cannot stop the ability.",
      "manaCost": "150 / 200 / 250",
      "cooldown": "110 / 100 / 90"
    }
  ],
  "Marci": [
    {
      "name": "Dispose",
      "image": "/images/abilities/marci_grapple.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Marci grabs an allied or enemy target and throws it effortlessly behind her, damaging and slowing the unit if it's an enemy. Any enemy units in the landing area will also be damaged and slowed.",
      "manaCost": "80",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "Rebound",
      "image": "/images/abilities/marci_companion_run.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Marci bounds to the targeted allied unit, choosing a direction and distance she will spring away from it. Upon reaching the unit, Marci lunges to her final destination, damaging and stunning enemies where she lands.\n\nWhen Rebound is set to alt-cast, Marci brings the target ally with her to her final destination.\n\n The ally receives 15% bonus movement speed for 4s.",
      "manaCost": "70 / 80 / 90 / 100",
      "cooldown": "24 / 20 / 16 / 12"
    },
    {
      "name": "Bodyguard",
      "image": "/images/abilities/marci_bodyguard.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Passively grants Marci lifesteal and bonus attack damage.\n\nWhen cast on an ally, she provides them with 75% of her passive lifesteal and attack damage bonus. Additionally Marci creates a shared all damage barrier for herself and her partner. As Marci attacks heroes, 30% of the damage dealt restores the barrier.",
      "manaCost": "60",
      "cooldown": "20"
    },
    {
      "name": "Special Delivery",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Marci whistles to instantly summon her courier to her. If the courier started in the fountain, it will take items from Marci's stash. After teleporting it will transfer these items to Marci and head back to the fountain.\n\nPassively grants all allied couriers 3 bonus levels and 1 bonus health.",
      "manaCost": "0",
      "cooldown": "215"
    },
    {
      "name": "Unleash",
      "image": "/images/abilities/marci_unleash.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Marci taps a hidden power, gaining Fury charges that allow her to deliver a rapid sequence of strikes that slow movement and attack speed of the target for 2s. The last strike in every Fury combo creates a damaging pulse around the target. In between Fury combos, Marci is unable to attack for 1.5s.\n\nMarci gains 15% movement speed when Unleash is cast.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "80 / 70 / 60"
    }
  ],
  "Primal Beast": [
    {
      "name": "Onslaught",
      "image": "/images/abilities/primal_beast_onslaught.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Primal Beast charges up and then runs in the chosen direction, knocking back enemies and allies alike. Enemy units are damaged and stunned on impact. The longer the charge duration, the farther Primal Beast's momentum will carry him. \n\n Can be cancelled at any time with the Stop command.",
      "manaCost": "120",
      "cooldown": "25 / 22 / 19 / 16"
    },
    {
      "name": "Trample",
      "image": "/images/abilities/primal_beast_trample.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Primal Beast stomps over everything. For every 140 units traveled, all enemies around the Beast receive damage. Deals base damage plus a multiplier of Primal Beast's attack damage. Primal Beast is disarmed for the duration of the ability.",
      "manaCost": "100",
      "cooldown": "30 / 27 / 24 / 21"
    },
    {
      "name": "Uproar",
      "image": "/images/abilities/primal_beast_uproar.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "The Beast's temper causes every instance of 50 hero damage or more to grant a stack of Uproar. \n\n When activated, Primal Beast releases a roar that slows surrounding enemies and grants the Beast additional attack damage and armor for 7 seconds based on his current stacks of Uproar.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Rock Throw",
      "image": "/images/abilities/primal_beast_rock_throw.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Primal Beast throws a rock at the target location that stuns and damages enemies. The rock cannot be thrown within a minimum range of Primal Beast. After landing, the rock splits into 3 additional fragments that land behind the initial target location.\n\n Rock Throw increases stacks of Uproar for each hero hit.",
      "manaCost": "85",
      "cooldown": "20"
    },
    {
      "name": "Begin Onslaught",
      "image": "/images/abilities/primal_beast_onslaught_release.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Begins the rush to the specified location.",
      "manaCost": "",
      "cooldown": ""
    },
    {
      "name": "Pulverize",
      "image": "/images/abilities/primal_beast_pulverize.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "CHANNELED - Primal Beast channels his rage, grabbing the target enemy and slamming them into the ground repeatedly, damaging and mini-stunning any enemies caught in the AoE. Each consecutive hit deals bonus damage. Lasts 2.3 seconds.",
      "manaCost": "100",
      "cooldown": "45 / 40 / 35"
    },
    {
      "name": "Colossal",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Muerta": [
    {
      "name": "Dead Shot",
      "image": "/images/abilities/muerta_dead_shot.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "100 / 120 / 140 / 160",
      "cooldown": "16 / 14 / 12 / 10"
    },
    {
      "name": "The Calling",
      "image": "/images/abilities/muerta_the_calling.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "135 / 150 / 165 / 180",
      "cooldown": "30 / 28 / 26 / 24"
    },
    {
      "name": "Gunslinger",
      "image": "/images/abilities/muerta_gunslinger.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Spectral Slug",
      "image": "/images/abilities/muerta_spectral_slug.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "",
      "manaCost": "75",
      "cooldown": "12"
    },
    {
      "name": "Pierce the Veil",
      "image": "/images/abilities/muerta_pierce_the_veil.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "",
      "manaCost": "150 / 250 / 350",
      "cooldown": "75 / 60 / 45"
    },
    {
      "name": "Supernatural",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "",
      "manaCost": "0",
      "cooldown": "0"
    }
  ],
  "Kez": [
    {
      "name": "Echo Slash",
      "image": "/images/abilities/kez_echo_slash.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Kez slashes forward in a 800 distance line with his Katana, attacking enemies in an area and applying a brief 100s impact slow. After a short delay, the area is attacked again. Heroes take bonus damage.",
      "manaCost": "75 / 90 / 105 / 120",
      "cooldown": "21 / 18 / 15 / 12"
    },
    {
      "name": "Grappling Claw",
      "image": "/images/abilities/kez_grappling_claw.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Kez swings on a grappling hook towards the target unit or tree. When the grappling hook collides with the target, that unit has slowed movement speed. Upon reaching the enemy target, Kez lands an attack on them.",
      "manaCost": "40",
      "cooldown": "13 / 11 / 9 / 7"
    },
    {
      "name": "Kazurai Katana",
      "image": "/images/abilities/kez_kazurai_katana.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Katana attacks and abilities apply a stacking damage over time to enemies that deals a percentage of the original attack's damage as additional damage over time. \n\nKez may activate the ability to impale the target with his attack, preventing them from moving or turning. The target's Katana debuff bursts, causing some of the stacks to deal damage instantly.",
      "manaCost": "40",
      "cooldown": "24 / 18 / 12 / 6"
    },
    {
      "name": "Switch Discipline",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Kez switches between his Kazurai Katana and Shodo Sai.\n\nHe gains different attack capabilities and abilities based on the weapon equipped. The abilities level up together, and when an ability is used, the associated alternate weapon ability also goes on cooldown.\n\nKez deals extra damage on the first Katana hit or ability after switching to Katana, and gains bonus speed after switching to Sai.",
      "manaCost": "0",
      "cooldown": "8"
    },
    {
      "name": "Raptor Dance",
      "image": "/images/abilities/kez_raptor_dance.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Kez enters into an uncontrollable state for 1 second, becoming invulnerable for 0.2s and receiving a basic dispel.\n\nIf the cast completes successfully, Kez performs a series of deadly radial slashes around him that deal damage based on the max health of the target and heal Kez for a percentage of all damage dealt.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "40 / 35 / 30"
    },
    {
      "name": "Falcon Rush",
      "image": "/images/abilities/kez_falcon_rush.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Kez gains the ability to rush towards enemy targets to deliver echoing secondary attacks. While in this state, Kez has phased collision and slow resistance.",
      "manaCost": "85 / 90 / 95 / 100",
      "cooldown": "21 / 18 / 15 / 12"
    },
    {
      "name": "Talon Toss",
      "image": "/images/abilities/kez_talon_toss.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Kez throws a Sai at the target unit, applying a fixed damage attack and silence.",
      "manaCost": "60 / 65 / 70 / 75",
      "cooldown": "13 / 11 / 9 / 7"
    },
    {
      "name": "Shodo Sai",
      "image": "/images/abilities/kez_shodo_sai.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Kez has a chance to critically strike the target when attacking with Sais.\n\nKez may activate the ability to disarm himself, lock his facing, and parry attacks and attack effects from the targeted direction for 2 seconds. If an attack is parried from an enemy Hero in this way, that Hero is stunned for 0.4s and gains a Mark. When a Marked target is attacked by Kez, it will guarantee a critical strike and stun the target.\n\nThe sub-ability may be used to cancel the blocking early.",
      "manaCost": "30 / 20 / 10 / 0",
      "cooldown": "24 / 18 / 12 / 6"
    },
    {
      "name": "Raven's Veil",
      "image": "/images/abilities/kez_ravens_veil.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Kez releases a wave of smoke that applies his Mark to nearby enemies, briefly reducing their vision. Kez receives a basic dispel and gains bonus movement speed and invisibility until he attacks or casts a spell.",
      "manaCost": "100 / 125 / 150",
      "cooldown": "40 / 35 / 30"
    },
    {
      "name": "Cancel",
      "image": "/images/abilities/kez_shodo_sai_parry_cancel.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Stop blocking physical attacks.",
      "manaCost": "",
      "cooldown": ""
    }
  ],
  "Largo": [
    {
      "name": "Catchy Lick",
      "image": "/images/abilities/largo_catchy_lick.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Largo licks the targeted unit with his tongue, pulling it back a short distance, applying a basic dispel, and dealing damage if it's an enemy.\n\nKilling or dispelling an effect from a target grants Largo temporary health regeneration.\n\nDISPEL TYPE: Basic Dispel",
      "manaCost": "80 / 85 / 90 / 95",
      "cooldown": "13 / 11 / 9 / 7"
    },
    {
      "name": "Frogstomp",
      "image": "/images/abilities/largo_frogstomp.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Largo tosses froglings to an area. They stomp the ground every 1 second, dealing damage and ministuns, and enemies in the area have reduced movement speed.",
      "manaCost": "85 / 95 / 105 / 115",
      "cooldown": "20 / 18 / 16 / 14"
    },
    {
      "name": "Croak of Genius",
      "image": "/images/abilities/largo_croak_of_genius.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Largo strums a tune to a friendly hero. The hero's items and abilities have reduced mana cost and a percentage of their damage reverberates over the following 5 seconds.\n\nWhen an affected hero spends mana, the remaining buff duration is reduced by 0.5s. Duration is not reduced for Largo himself.",
      "manaCost": "40",
      "cooldown": "25"
    },
    {
      "name": "Encore",
      "image": "/images/abilities/innate_icon.png",
      "isInnate": true,
      "isUltimate": false,
      "description": "Buffs that Largo applies to himself or his team have extended duration.",
      "manaCost": "0",
      "cooldown": "0"
    },
    {
      "name": "Amphibian Rhapsody",
      "image": "/images/abilities/largo_amphibian_rhapsody.png",
      "isInnate": false,
      "isUltimate": true,
      "description": "Largo gets ready to groove. He is disarmed and his ability bar switches to 3 song abilities, each with different effects. Songs are only effective if strummed on the beat.\n\nEvery time he strums successfully, he gains a stack of Groovin'. Each stack gives him bonus armor and reduces the mana cost of every song, but he loses a stack if he misses a beat. Stacks linger for a short duration when Largo's song ends.",
      "manaCost": "0",
      "cooldown": "2"
    },
    {
      "name": "Bullbelly Blitz",
      "image": "/images/abilities/largo_song_fight_song.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Largo plays a song that deals 20 magical damage to nearby enemies. The song also increases nearby allied heroes' spell amplification and grants their attacks additional magic damage.",
      "manaCost": "25 / 35 / 45",
      "cooldown": "0.2"
    },
    {
      "name": "Hotfeet Hustle",
      "image": "/images/abilities/largo_song_double_time.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Largo plays a song that increases nearby friendly units' movement speed and grants a brief slow resistance.",
      "manaCost": "25 / 35 / 45",
      "cooldown": "0.2"
    },
    {
      "name": "Island Elixir",
      "image": "/images/abilities/largo_song_good_vibrations.png",
      "isInnate": false,
      "isUltimate": false,
      "description": "Largo plays a song that heals nearby friendly heroes.",
      "manaCost": "25 / 35 / 45",
      "cooldown": "0.2"
    }
  ]
};
