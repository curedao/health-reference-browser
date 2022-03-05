import { SpecialParameter } from "src/models/biomarker.model";

export const nutritionParameters: SpecialParameter[] = [
    //{ id: 'nutrition_calories', name_long: 'Calories', unit: 'kcal' },  //kcal
    { id: 'nutrition_energy', name_long: 'Energy', unit: 'kcal', name_long_cronometer_meal: 'Energy (kcal)' },     // or kJ
    { id: 'nutrition_amount', name_long: 'Amount', unit: 'g'},    //g
    { id: 'nutrition_ash', name_long: 'Ash', unit: 'g', name_long_cronometer_meal: 'Ash (g)' },
    { id: 'nutrition_beta_hydroxybutyrate', name_long: 'Beta-Hydroxybutyrate', unit: 'g', name_long_cronometer_meal: 'Beta-Hydroxybutyrate (g)' },
];

export const nutritionParametersMacroNutrients: SpecialParameter[] = [ 
    // Macro (g)
    { id: 'nutrition_water', name_long: 'Water', unit: 'g' , name_long_cronometer_meal: 'Water (g)' },
    { id: 'nutrition_carbohydrate', name_long: 'Carbohydrates', unit: 'g', name_long_cronometer_meal: 'Carbs (g)' },
    { id: 'nutrition_net_carbohydrate', name_long: 'Net Carbohydrates', unit: 'g', name_long_cronometer_meal: 'Net Carbs (g)' },
    { id: 'nutrition_starch', name_long: 'Starch', unit: 'g', name_long_cronometer_meal: 'Starch (g)' },
    { id: 'nutrition_fat', name_long: 'Total Fats', unit: 'g', name_long_cronometer_meal: 'Fat (g)' },
    { id: 'nutrition_omega3', name_long: 'Omega 3', unit: 'g', name_long_cronometer_meal: 'Omega-3 (g)' },
    { id: 'nutrition_omega6', name_long: 'Omega 6', unit: 'g', name_long_cronometer_meal: 'Omega-6 (g)' },
    { id: 'nutrition_protein', name_long: 'Proteins', unit: 'g', name_long_cronometer_meal: 'Protein (g)' },
    { id: 'nutrition_saturatedFat', name_long: 'Saturated Fats', unit: 'g', name_long_cronometer_meal: 'Saturated (g)' },
    { id: 'nutrition_monounsaturatedFat', name_long: 'Monounsaturated Fats', unit: 'g', name_long_cronometer_meal: 'Monounsaturated (g)' },
    { id: 'nutrition_polyunsaturatedFat', name_long: 'Polyunsaturated Fats', unit: 'g', name_long_cronometer_meal: 'Polyunsaturated (g)' },
    { id: 'nutrition_transFat', name_long: 'Trans Fats', unit: 'g', name_long_cronometer_meal: 'Trans-Fats (g)' },
    { id: 'nutrition_fiber', name_long: 'Dietary Fiber', unit: 'g', name_long_cronometer_meal: 'Fiber (g)'},
    { id: 'nutrition_sugar', name_long: 'Sugar', unit: 'g', name_long_cronometer_meal: 'Sugars (g)' },
    { id: 'nutrition_fructose', name_long: 'Fructose', unit: 'g', name_long_cronometer_meal: 'Fructose (g)' },
    { id: 'nutrition_galactose', name_long: 'Galactose', unit: 'g', name_long_cronometer_meal: 'Galactose (g)' },
    { id: 'nutrition_glucose', name_long: 'Glucose', unit: 'g', name_long_cronometer_meal: 'Glucose (g)' },
    { id: 'nutrition_lactose', name_long: 'Lactose', unit: 'g', name_long_cronometer_meal: 'Lactose (g)' },
    { id: 'nutrition_maltose', name_long: 'Maltose', unit: 'g', name_long_cronometer_meal: 'Maltose (g)' },
    { id: 'nutrition_sucrose', name_long: 'Sucrose', unit: 'g', name_long_cronometer_meal: 'Sucrose (g)' },
    { id: 'nutrition_added_sugar', name_long: 'Added Sugar', unit: 'g', name_long_cronometer_meal: 'Added Sugars (g)' },
    { id: 'nutrition_sugar_alcohol', name_long: 'Sugar Alcohol', unit: 'g', name_long_cronometer_meal: 'Sugar Alcohol (g)' },
];

export const nutritionParametersStimulants: SpecialParameter[] = [
    { id: 'nutrition_alcohol', name_long: 'Alcohol', unit: 'g', name_long_cronometer_meal: 'Alcohol (g)' },
    { id: 'nutrition_caffeine', name_long: 'Caffeine', unit: 'mg', name_long_cronometer_meal: 'Caffeine (mg)' },
    { id: 'nutrition_taurine', name_long: 'Taurine', unit: 'mg' },
    { id: 'nutrition_nicotine', name_long: 'Nicotine', unit: 'mg' }
  ];

export const nutritionParametersMicroNutrients: SpecialParameter[] = [
    // Micro (mg)
    { id: 'nutrition_cholesterol', name_long: 'Cholesterol', unit: 'mg', name_long_cronometer_meal: 'Cholesterol (mg)' },
    { id: 'nutrition_phytosterol', name_long: 'Phytosterol', unit: 'mg', name_long_cronometer_meal: 'Phytosterol (mg)' },
    { id: 'nutrition_folate', name_long: 'Folate', unit: 'ug', name_long_cronometer_meal: 'Folate (µg)' },                 // Microgram
    // Mass elements
    { id: 'nutrition_calcium', name_long: 'Calcium', unit: 'mg', name_long_cronometer_meal: 'Calcium (mg)' },
    { id: 'nutrition_sodium', name_long: 'Sodium', unit: 'mg', name_long_cronometer_meal: 'Sodium (mg)' },  // Salz
    { id: 'nutrition_potassium', name_long: 'Potassium', unit: 'mg', name_long_cronometer_meal: 'Potassium (mg)' }, // Kalium
    { id: 'nutrition_magnesium', name_long: 'Magnesium', unit: 'mg', name_long_cronometer_meal: 'Magnesium (mg)' },
    { id: 'nutrition_phosphorus', name_long: 'Phosphorus', unit: 'mg', name_long_cronometer_meal: 'Phosphorus (mg)' },
    { id: 'nutrition_sulfur', name_long: 'Sulfur', unit: 'mg' },
    // Essential trace elements
    { id: 'nutrition_iron', name_long: 'Iron', unit: 'mg', name_long_cronometer_meal: 'Iron (mg)' },
    { id: 'nutrition_iodine', name_long: 'Iodine', unit: 'ug', name_long_cronometer_meal: 'Iodine (µg)' },
    { id: 'nutrition_copper', name_long: 'Copper', unit: 'mg', name_long_cronometer_meal: 'Copper (mg)' },
    { id: 'nutrition_zinc', name_long: 'Zinc', unit: 'mg', name_long_cronometer_meal: 'Zinc (mg)' },
    { id: 'nutrition_manganese', name_long: 'Manganese', unit: 'mg', name_long_cronometer_meal: 'Manganese (mg)' },
    { id: 'nutrition_molybdenum', name_long: 'Molybdenum', unit: 'ug', name_long_cronometer_meal: 'Molybdenum (µg)'  },    // Microgram
    { id: 'nutrition_selenium', name_long: 'Selenium', unit: 'ug', name_long_cronometer_meal: 'Selenium (µg)' },           // Microgram
    { id: 'nutrition_cobalt', name_long: 'Cobalt', unit: 'mg' },
    // Likely Essential trace elements
    { id: 'nutrition_chromium', name_long: 'Chromium', unit: 'ug', name_long_cronometer_meal: 'Chromium (µg)' },           // Microgram
    { id: 'nutrition_fluoride', name_long: 'Fluoride', unit: 'ug', name_long_cronometer_meal: 'Fluoride (µg)' },           // Microgram
    { id: 'nutrition_boron', name_long: 'Boron', unit: 'mg' },
    { id: 'nutrition_silicon', name_long: 'Silicon', unit: 'mg' },
    { id: 'nutrition_vanadium', name_long: 'Vanadium', unit: 'mg' },
    // Maybe Essential trace elements
    { id: 'nutrition_arsenic', name_long: 'Arsenic', unit: 'mg' },
    { id: 'nutrition_bromine', name_long: 'Bromine', unit: 'mg' },
    { id: 'nutrition_lithium', name_long: 'Lithium', unit: 'mg' },
    { id: 'nutrition_nickel', name_long: 'Nickel', unit: 'mg' },
    { id: 'nutrition_rubidium', name_long: 'Rubidium', unit: 'mg' },
    { id: 'nutrition_tin', name_long: 'Tin', unit: 'mg' },
    // Vitamins
    { id: 'nutrition_vitaminA', name_long: 'Vitamin A (Retinol)', unit: 'ug', name_long_cronometer_meal: 'Vitamin A (IU)', factor_cronometer_meal: 0.3 },    // Retinol    // Microgram
    { id: 'nutrition_vitaminC', name_long: 'Vitamin C (Ascorbic Acid)', unit: 'mg', name_long_cronometer_meal: 'Vitamin C (mg)' },    // Ascorbinsäure
    { id: 'nutrition_vitaminD', name_long: 'Vitamin D (Cholecalciferol)', unit: 'ug', name_long_cronometer_meal: 'Vitamin D (IU)', factor_cronometer_meal: 0.025 },    // Cholecalciferol      // Microgram
    { id: 'nutrition_vitaminE', name_long: 'Vitamin E (Tocopherol)', unit: 'mg', name_long_cronometer_meal: 'Vitamin E (mg)' },    // Tocopherol
    { id: 'nutrition_vitaminK', name_long: 'Vitamin K (Phyllochinon)', unit: 'ug', name_long_cronometer_meal: 'Vitamin K (µg)' },    // Phyllochinon            // Microgram
    { id: 'nutrition_vitaminB1', name_long: 'Vitamin B1 (Thiamin)', unit: 'mg', name_long_cronometer_meal: 'B1 (Thiamine) (mg)' },   // Thiamin
    { id: 'nutrition_vitaminB2', name_long: 'Vitamin B2 (Riboflavin)', unit: 'mg', name_long_cronometer_meal: 'B2 (Riboflavin) (mg)' },   // Riboflavin
    { id: 'nutrition_vitaminB3', name_long: 'Vitamin B3 (Niacin)', unit: 'mg', name_long_cronometer_meal: 'B3 (Niacin) (mg)' },   // Niacin
    { id: 'nutrition_vitaminB5', name_long: 'Vitamin B5 (Pantothenic Acid)', unit: 'mg', name_long_cronometer_meal: 'B5 (Pantothenic Acid) (mg)' },   // Pantothensäure
    { id: 'nutrition_vitaminB6', name_long: 'Vitamin B6 (Pyridoxine)', unit: 'mg', name_long_cronometer_meal: 'B6 (Pyridoxine) (mg)' },   // Pyridoxin
    { id: 'nutrition_vitaminB7', name_long: 'Vitamin B7 (Biotin)', unit: 'ug', name_long_cronometer_meal: 'Biotin (µg)'  },   // Biotin                 // Microgram
    { id: 'nutrition_vitaminB9', name_long: 'Vitamin B9 (Folic Acid)', unit: 'mg' },   // Folsäure
    { id: 'nutrition_vitaminB12', name_long: 'Vitamin B12 (Cobalamin)', unit: 'ug', name_long_cronometer_meal: 'B12 (Cobalamin) (µg)' },  // Cobalamin 
    { id: 'nutrition_choline', name_long: 'Choline', unit: 'mg', name_long_cronometer_meal: 'Choline (mg)' } 
];

export const nutritionParametersAllergens: SpecialParameter[] = [
    // Allergens        // from: https://rapidapi.com/msilverman/api/nutritionix-nutrition-database
    { id: 'nutrition_contains_milk', name_long: 'Contains Milk', unit: 'g' },
    { id: 'nutrition_contains_eggs', name_long: 'Contains Eggs', unit: 'g' },
    { id: 'nutrition_contains_fish', name_long: 'Contains Fish', unit: 'g' },
    { id: 'nutrition_contains_shellfish', name_long: 'Contains Shellfish', unit: 'g' },
    { id: 'nutrition_contains_tree_nuts', name_long: 'Contains Tree Nuts', unit: 'g' },
    { id: 'nutrition_contains_peanuts', name_long: 'Contains Peanuts', unit: 'g' },
    { id: 'nutrition_contains_wheat', name_long: 'Contains Wheat', unit: 'g' },
    { id: 'nutrition_contains_soybeans', name_long: 'Contains Soybeans', unit: 'g' },
    { id: 'nutrition_contains_gluten', name_long: 'Contains Gluten', unit: 'g' }
];

export const nutritionParametersOther: SpecialParameter[] = [
    { id: 'nutrition_contains_processed_food', name_long: 'Contains Processed Food', unit: 'g' },
    { id: 'nutrition_contains_additives', name_long: 'Contains Additives', unit: 'g' },
];

export const nutritionParametersProteins: SpecialParameter[] = [
    { id: 'nutrition_alanine', name_long: 'Alanine', unit: 'g', name_long_cronometer_meal: 'Alanine (g)' },
    { id: 'nutrition_arginine', name_long: 'Arginine', unit: 'g', name_long_cronometer_meal: 'Arginine (g)' },
    { id: 'nutrition_asparagine', name_long: 'Asparagine', unit: 'g', name_long_cronometer_meal: 'Asparagine (g)' },
    { id: 'nutrition_aspartic_acid', name_long: 'Aspartic Acid', unit: 'g', name_long_cronometer_meal: 'Aspartic acid (g)' },
    { id: 'nutrition_cysteine', name_long: 'Cysteine', unit: 'g', name_long_cronometer_meal: 'Cystine (g)' },                      // Typo at cronometer
    { id: 'nutrition_glutamine', name_long: 'Glutamine', unit: 'g', name_long_cronometer_meal: 'Glutamine (g)' },
    { id: 'nutrition_glutamic_acid', name_long: 'Glutamic Acid', unit: 'g', name_long_cronometer_meal: 'Glutamic acid (g)' },
    { id: 'nutrition_glycine', name_long: 'Glycine', unit: 'g', name_long_cronometer_meal: 'Glycine (g)' },
    { id: 'nutrition_histidine', name_long: 'Histidine', unit: 'g', name_long_cronometer_meal: 'Histidine (g)' },
    { id: 'nutrition_hydroxyproline', name_long: 'Hydroxyproline', unit: 'g', name_long_cronometer_meal: 'Hydroxyproline (g)' },
    { id: 'nutrition_isoleucine', name_long: 'Isoleucine', unit: 'g', name_long_cronometer_meal: 'Isoleucine (g)' },
    { id: 'nutrition_leucine', name_long: 'Leucine', unit: 'g', name_long_cronometer_meal: 'Leucine (g)' },
    { id: 'nutrition_lysine', name_long: 'Lysine', unit: 'g', name_long_cronometer_meal: 'Lysine (g)' },
    { id: 'nutrition_methionine', name_long: 'Methionine', unit: 'g', name_long_cronometer_meal: 'Methionine (g)' },
    { id: 'nutrition_phenylalanine', name_long: 'Phenylalanine', unit: 'g', name_long_cronometer_meal: 'Phenylalanine (g)' },
    { id: 'nutrition_proline', name_long: 'Proline', unit: 'g', name_long_cronometer_meal: 'Proline (g)' },
    { id: 'nutrition_serine', name_long: 'Serine', unit: 'g', name_long_cronometer_meal: 'Serine (g)' },
    { id: 'nutrition_threonine', name_long: 'Threonine', unit: 'g', name_long_cronometer_meal: 'Threonine (g)' },
    { id: 'nutrition_tryptophan', name_long: 'Tryptophan', unit: 'g', name_long_cronometer_meal: 'Tryptophan (g)' },
    { id: 'nutrition_tyrosine', name_long: 'Tyrosine', unit: 'g', name_long_cronometer_meal: 'Tyrosine (g)' },
    { id: 'nutrition_valine', name_long: 'Valine', unit: 'g', name_long_cronometer_meal: 'Valine (g)' }
];

export const nutritionParametersAll: SpecialParameter[] = [...nutritionParameters, ...nutritionParametersMacroNutrients, ...nutritionParametersProteins, ...nutritionParametersStimulants, ...nutritionParametersMicroNutrients, ...nutritionParametersAllergens, ...nutritionParametersOther];

export const nutritionTypes: { id: string, name_long: string }[] = [
    { id: 'breakfast', name_long: 'Breakfast' },
    { id: 'lunch', name_long: 'Lunch' },
    { id: 'dinner', name_long: 'Dinner' },
    { id: 'morning_snack', name_long: 'Morning Snack' },
    { id: 'afternoon_snack', name_long: 'Afternoon Snack' },
    { id: 'after_dinner', name_long: 'After Dinner' },
    { id: 'other', name_long: 'Other' }
];

export const nutritionCategories: { id: string, name_long: string }[] = [
    { id: 'vegetable', name_long: 'Vegetables' },
    { id: 'fruit', name_long: 'Fruits' },
    { id: 'meat', name_long: 'Meat and Poultry' },
    { id: 'fish', name_long: 'Fish' },
    { id: 'seafood', name_long: 'Seafood' },
    { id: 'egg', name_long: 'Eggs' },
    { id: 'dairy', name_long: 'Dairy' },
    { id: 'grain', name_long: 'Grains and Cereals' },
    { id: 'nightshade', name_long: 'Nightshades' },
    { id: 'legume', name_long: 'Legumes' },
    { id: 'synthetic', name_long: 'Synthetic' },
    { id: 'oilfat', name_long: 'Oils and Fats' },
    { id: 'seednut', name_long: 'Seeds and Nuts' },
    { id: 'algae', name_long: 'Algae' },
    { id: 'root', name_long: 'Root Plants' },
    { id: 'water', name_long: 'Water' },
    { id: 'sweets', name_long: 'Sweets' },
    { id: 'coffee', name_long: 'Coffee' },
    { id: 'tea', name_long: 'Tea' },
    { id: 'alcohol', name_long: 'Alcohol' },
    { id: 'other', name_long: 'Other' }
];