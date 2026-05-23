/* ==========================================================================
   PETCARE GUIDE APPLICATION CONTROLLER
   Pure Vanilla Javascript - State Managers, Router, Interactive Widgets & AI Chatbot
   ========================================================================== */

// --- 1. Comprehensive Local Database ---
const PET_CARE_DATA = {
  dog: {
    title: "Dog Care Manual",
    subtitle: "A detailed timeline and care toolkit for rescuing and raising street-found canines.",
    iconClass: "fa-dog",
    bgClass: "bg-dog",
    rescueProtocol: {
      safety: "Ensure personal safety first! Use a makeshift muzzle using soft gauze or a leash if the dog is growling, scared, or in pain. Approach from the side at eye level. Cover their head with a thick blanket to calm them down before moving.",
      stabilize: "Keep the dog in a warm, dry room isolated from any household pets. Gently clean superficial mud or dirt, check for ticks/fleas, and carefully palpate limbs to locate fractures. Do not let them run.",
      hydration: "Chronic dehydration causes organ failure. Place fresh water nearby immediately. If the dog is too weak to lift its head, use a needle-less syringe to drop small droplets of water or electrolyte mix inside their gums. Avoid force-feeding solids."
    },
    timeline: [
      {
        stage: "Newborn puppy",
        ageRange: "0-2 weeks",
        vax: "No Vaccines Yet (Maternal Antibodies)",
        food: "Commercial Puppy Milk Replacer (KMR) fed warm every 2 hours via bottle or syringe. Never feed cow's milk (causes fatal diarrhea).",
        tips: "Puppies cannot urinate/defecate on their own. Gently rub their genital area with a warm damp cotton ball after each feed to stimulate elimination.",
        precautions: "Keep them constantly warm on a wrapped heating pad. Hypothermia is highly lethal. Do not bathe."
      },
      {
        stage: "2 weeks",
        ageRange: "2-4 weeks",
        vax: "Deworming Cycle 1",
        food: "KMR milk continues every 3-4 hours. Eyes will start opening. Eyesight is still blurry; do not expose to harsh direct lights.",
        tips: "Provide a shallow container with warm milk. Pups will begin attempting to lap liquids up themselves.",
        precautions: "Keep them in an enclosed box with raised sides. Puppies will begin crawling and wandering out of their den."
      },
      {
        stage: "1 month",
        ageRange: "4-6 weeks",
        vax: "First Deworming + Vet Assessment",
        food: "Transition to a soft gruel. Mix 3 parts warm KMR formula with 1 part premium puppy kibble or wet food. Feed 4-5 times daily.",
        tips: "Provide safe rubber chew toys as teething begins. Keep the feeding bowls shallow so they do not choke.",
        precautions: "Do not expose to unvaccinated street dogs. Ensure clean drinking water is always available in a tiny bowl."
      },
      {
        stage: "3 months",
        ageRange: "8-12 weeks",
        vax: "DHPP Shot 1 + Rabies Vaccine",
        food: "High-protein dry puppy kibble soaked in warm water or bone broth. Feed exactly 4 times a day.",
        tips: "Start basic indoor positive-reinforcement training (sitting, name recall) and initial housebreaking routines.",
        precautions: "Highest susceptibility to Parvovirus. Do not walk them in public areas or dog parks until all booster shots are completed."
      },
      {
        stage: "6 months",
        ageRange: "4-6 months",
        vax: "DHPP Booster + Deworming Cycle 2",
        food: "High-quality dry puppy food. Transition to 3 meals a day. Can introduce small treats like boiled pumpkin.",
        tips: "Teething accelerates; ensure you provide hard rubber toys or frozen carrots to soothe sore gums.",
        precautions: "Avoid rigorous, high-impact running or jumping to protect their growing joints and growth plates."
      },
      {
        stage: "1 year",
        ageRange: "10-12 months",
        vax: "Annual DHPP Booster + Rabies Booster",
        food: "Transition from puppy kibble to adult dog formula. Feed 2 nutritious meals daily.",
        tips: "Begin daily outdoor walks (30-45 minutes) and advanced socialization. Maintain dental brushing routines.",
        precautions: "Discuss spaying/neutering options with your veterinarian to prevent hormonal issues or unwanted litters."
      },
      {
        stage: "Adult dog",
        ageRange: "1 year+",
        vax: "Annual Wellness Check + Yearly Boosters",
        food: "Balanced adult dry or wet food based on activity levels. Keep treats under 10% of daily caloric intake.",
        tips: "Provide regular exercise (1-2 walks daily). Schedule professional scale/polish checks annually.",
        precautions: "Monitor for sudden lethargy, weight changes, or digestive upsets. Ensure tick/flea prevention is applied monthly."
      }
    ],
    safeFoods: [
      { name: "Boiled Skinless Chicken", desc: "No salt, spices, or oils. Incredible protein source." },
      { name: "Plain Steamed Pumpkin", desc: "Helps regulate digestion, solidifies stool." },
      { name: "Scrambled Eggs", desc: "Cooked dry. Excellent vitamins and healthy fats." },
      { name: "Slices of Crisp Apple", desc: "Core and seeds removed (seeds contain trace cyanide)." }
    ],
    toxicFoods: [
      { name: "Chocolate & Cocoa", desc: "Contains Theobromine, which induces fatal cardiac arrest." },
      { name: "Onions & Garlic", desc: "Destroys red blood cells, triggering acute hemolytic anemia." },
      { name: "Cooked Chicken/Beef Bones", desc: "Splinters easily, causing internal stomach tears." },
      { name: "Grapes & Raisins", desc: "Causes immediate, irreversible acute kidney failure." }
    ],
    dietFreq: "Puppies (0-6 months): 4 times daily. Teens (6-12 months): 3 times daily. Adults: 2 times daily.",
    waterNeed: "Requires 50ml to 70ml of fresh clean water per kilogram of body weight daily.",
    hygiene: {
      fleas: "Do not use toxic flea baths on weak strays. Use a fine-tooth flea comb dipped in soapy dish soap. Manually pick off parasites.",
      bath: "Stabilize for 4-5 days first. Bathe in lukewarm water with oatmeal dog shampoo. Towel dry and blow dry completely to avoid hypothermia.",
      space: "Wash their bedding weekly. Clean floors with diluted vinegar or pet-safe disinfectant. Avoid chemical bleach."
    },
    lifestyle: {
      sleep: "Puppies sleep 18-20 hours. Adults sleep 12-14 hours. Give them a dedicated, dark, warm crate or soft bed.",
      exercise: "Puppies: gentle indoor play. Adults: 30-60 minutes daily walks and fetch games.",
      diseases: "Parvovirus (severe diarrhea/vomiting), Distemper (watery eyes, spasms), Tick Fever (lethargy, fever). Consult a vet immediately."
    }
  },
  cat: {
    title: "Cat Care Manual",
    subtitle: "Essential step-by-step guidance for nursing, hydration, and social integration of rescued cats.",
    iconClass: "fa-cat",
    bgClass: "bg-cat",
    rescueProtocol: {
      safety: "Frightened cats scratch and bite, which can cause severe infections (Cat Scratch Fever). Wrap the cat in a thick bath towel (making a 'cat burrito') to restrain them safely. Never attempt to grab a stray cat by the tail or scruff.",
      stabilize: "Place them in a quiet dark room (like a bathroom) with a warm bed. Ensure they have access to a clean plastic box with low-entry unscented clay litter.",
      hydration: "Cats have a low thirst drive. Provide shallow water bowls. For dehydrated kittens, use a needle-free syringe to dab warm water or unflavored Pedialyte on their gums every 30 minutes."
    },
    timeline: [
      {
        stage: "Newborn puppy", // Using equivalent structure for slider uniformity
        ageRange: "0-2 weeks",
        vax: "No Vaccines Yet (Colostrum Protection)",
        food: "Kitten Milk Replacer (KMR) warmed to body temperature. Feed 2-4ml every 2 hours using a dedicated kitten bottle.",
        tips: "Always feed kittens on their tummies (never on their backs, which causes fluid aspiration). Rub their groin to stimulate urination.",
        precautions: "Keep them constantly warm. Newborn kittens cannot shiver or regulate their own body temperatures."
      },
      {
        stage: "2 weeks",
        ageRange: "2-4 weeks",
        vax: "First Deworming Dossier",
        food: "Warm KMR formula continues every 3-4 hours. Eyes fully open. Baby teeth start showing.",
        tips: "Place a small cardboard litter tray with non-clumping paper litter. They will instinctively begin learning.",
        precautions: "Avoid using clumping clay litter yet. Kittens might ingest it, causing lethal intestinal blockages."
      },
      {
        stage: "1 month",
        ageRange: "4-6 weeks",
        vax: "Kitten Health Checkup",
        food: "Transition to kitten slurry: Blend canned wet kitten food with warm KMR formula. Feed 5 times daily.",
        tips: "Encourage soft social bonding. Offer small felt toys to stimulate natural hunting/pouncing play.",
        precautions: "Provide deep warmth. Do not allow them to climb high spaces as their coordination is still developing."
      },
      {
        stage: "3 months",
        ageRange: "8-12 weeks",
        vax: "F3 (FVRCP) Shot 1 + Rabies Shot",
        food: "High-protein dry kitten kibble and wet kitten food. Feed 4 structured meals daily.",
        tips: "Schedule their spay/neuter appointment. Practice basic nail clipping and gentle grooming handling.",
        precautions: "Keep indoors entirely. Highly susceptible to viral pathogens like Feline Panleukopenia."
      },
      {
        stage: "6 months",
        ageRange: "4-6 months",
        vax: "FVRCP Booster",
        food: "Balanced dry and wet kitten food. Maintain 3 meals daily.",
        tips: "Ensure vertical scratching posts are available so they do not scratch household furniture.",
        precautions: "Adolescent cats start roaming behaviors; keep all windows closed or secured with safety mesh."
      },
      {
        stage: "1 year",
        ageRange: "10-12 months",
        vax: "Annual FVRCP + Rabies Booster",
        food: "Transition slowly over 7 days to adult dry/wet cat food. Feed twice daily.",
        tips: "Keep them active with feather wands, laser toys, or cat trees. Brush their coat once a week.",
        precautions: "Prevent obesity by measuring exact food portions rather than leaving a full bowl out constantly."
      },
      {
        stage: "Adult dog",
        ageRange: "1 year+",
        vax: "Yearly Vet Check + Annual Boosters",
        food: "High-protein adult wet and dry food. Ensure wet food is provided for hydration support.",
        tips: "Maintain fresh water fountains (cats prefer moving water). Place scratching boards near windows.",
        precautions: "Monitor for straining in the litter box, especially in males (urinary blockages are a fatal emergency)."
      }
    ],
    safeFoods: [
      { name: "Boiled Salmon or Tuna", desc: "In plain water, no oil or salt. Extremely high in Omega-3." },
      { name: "Plain Canned Pumpkin", desc: "Great dietary fiber to relieve hairballs and diarrhea." },
      { name: "Plain Boiled Turkey", desc: "Easily digestible lean protein, gentle on stray stomachs." },
      { name: "Cooked Peas", desc: "Sometimes found in commercial diets, packed with fiber." }
    ],
    toxicFoods: [
      { name: "All Dairy (Milk & Cheese)", desc: "Triggers intense vomiting and diarrhea (lactose intolerance)." },
      { name: "Onions, Chives & Garlic", desc: "Extremely toxic, causes Heinz body hemolytic anemia." },
      { name: "Raw Dough with Yeast", desc: "Expands in stomach, producing toxic alcohol levels internally." },
      { name: "Caffeine & Energy Drinks", desc: "Triggers dangerous heart rate spikes and muscle tremors." }
    ],
    dietFreq: "Kittens (0-6 months): 4 to 5 times daily. Teens (6-12 months): 3 times daily. Adults: 2 times daily.",
    waterNeed: "Requires 40ml to 55ml of water per kilogram daily. Felines prefer wide ceramic or metallic bowls.",
    hygiene: {
      fleas: "Comb out fleas manually. Avoid commercial dog spot-on treatments (permethrin is highly fatal to cats).",
      bath: "Avoid baths unless coated in grease or toxic substances. Wipe down with warm damp cat wipes instead.",
      space: "Clean the litter box daily. Deep wash the box with unscented dish soap every two weeks."
    },
    lifestyle: {
      sleep: "Cats sleep 15-18 hours. Provide raised hammocks or high shelves where they feel secure and out of reach.",
      exercise: "15-20 minutes of daily interactive wand play. Provide scratching posts to maintain claw health.",
      diseases: "Feline Panleukopenia (lethal parvovirus), Cat Flu (sneezing, eye crust), FLUTD (urinary struggles). Urgent vet care needed."
    }
  },
  bird: {
    title: "Bird Care Manual",
    subtitle: "Emergency guidelines for saving fallen nestlings, warming fragile birds, and balanced seed/formula care.",
    iconClass: "fa-dove",
    bgClass: "bg-bird",
    rescueProtocol: {
      safety: "Rescued wild birds have highly fragile skeletons. Pick them up using a soft microfibre towel or napkin. Never grab a bird by its neck, wings, or tail. Do not squeeze their ribcage as they lack a diaphragm and can suffocate.",
      stabilize: "Line a small box with tissues. Place the bird inside, cover the box with a lid containing air holes, and place it in a dark, warm, and sound-proof room.",
      hydration: "Never squirt water directly into a bird's open beak. They have a windpipe opening (glottis) at the base of their tongue; liquid will run straight into their lungs and drown them. Instead, touch a wet cotton swab to the side of their beak."
    },
    timeline: [
      {
        stage: "Newborn puppy",
        ageRange: "0-2 weeks",
        vax: "No Vaccines Required",
        food: "Warm commercial hand-rearing formula fed at 38-40°C every 2 hours via a syringe or small crop needle.",
        tips: "Orphaned nestlings are featherless. They must be kept in a makeshift nest (a small bowl lined with tissues) inside an incubator.",
        precautions: "Formula fed too cold causes crop stasis (food rots in stomach); formula too hot causes fatal crop burns."
      },
      {
        stage: "2 weeks",
        ageRange: "2-4 weeks",
        vax: "Crop Parasite Screen",
        food: "Formula continues every 3-4 hours. Feathers start erupting (pin-feathers). Eyes open completely.",
        tips: "Maintain sterile conditions. Keep the nest free of fecal droppings by changing tissues after every feed.",
        precautions: "Do not force them to perch. Their feet and leg joints are still too weak and soft."
      },
      {
        stage: "1 month",
        ageRange: "4-6 weeks",
        vax: "Basic Avian Vet Screen",
        food: "Transition to fledging diet. Offer wet soaked seeds, finely mashed soft fruits, and formula 3 times daily.",
        tips: "Provide a low, sturdy wooden perch. They will begin attempting to balance, stretch, and flap wings.",
        precautions: "Keep them in an enclosed cage with close bar spacing. Fledglings will start leaping and attempting short flights."
      },
      {
        stage: "3 months",
        ageRange: "8-12 weeks",
        vax: "No Standard Vaccines",
        food: "High-quality pellet diet, seed mixes, and daily fresh leafy greens (spinach, coriander).",
        tips: "Practice flight landing in a safe, closed, window-screened room. Encourage foraging behavior.",
        precautions: "Cover all open mirrors and windows. Young birds do not recognize glass and can fly into them, causing fatal head trauma."
      },
      {
        stage: "6 months",
        ageRange: "4-6 months",
        vax: "Annual Fecal Test",
        food: "Pellets (60%), seed mixes (20%), fresh vegetables and fruits (20%). Provide clean water daily.",
        tips: "Provide natural branch perches of varying diameters to keep their feet muscles strong and healthy.",
        precautions: "Do not expose birds to chemical aerosol sprays, non-stick Teflon pan fumes, or scented candles (highly toxic respiratory systems)."
      },
      {
        stage: "1 year",
        ageRange: "10-12 months",
        vax: "Wellness Checkup",
        food: "Balanced adult avian diet. Ensure cuttlebone is available in cage for calcium intake.",
        tips: "Ensure they get 10-12 hours of uninterrupted sleep in a dark, covered cage to avoid behavioral issues.",
        precautions: "Keep cat and dog saliva completely away from birds. Mammalian saliva contains Pasteurella bacteria, fatal to avians."
      },
      {
        stage: "Adult dog",
        ageRange: "1 year+",
        vax: "Annual Vet Parasite Clearance",
        food: "Balanced seed, pellet, veggie, and fruit diet. Avoid chocolate, avocado, or salty crackers.",
        tips: "Change cage liners daily. Provide a shallow dish with lukewarm water for their daily bathing routine.",
        precautions: "Watch for fluffing up of feathers, sleeping on two feet, or watery droppings (hallmarks of a sick bird)."
      }
    ],
    safeFoods: [
      { name: "Boiled Egg Yolks", desc: "Provides essential protein and healthy fats for growing chicks." },
      { name: "Finely Chopped Broccoli", desc: "High in calcium and Vitamin C to support bone growth." },
      { name: "Fresh Apple Slices", desc: "No seeds. Offers clean, hydrating sugars and fiber." },
      { name: "Steamed Sweet Potatoes", desc: "Great source of Vitamin A, highly palatable for most birds." }
    ],
    toxicFoods: [
      { name: "Avocado (All Parts)", desc: "Contains Persin, which causes rapid, fatal fluid buildup around heart." },
      { name: "Apple Seeds & Cherry Pits", desc: "Contains amygdalin, which breaks down into toxic cyanide." },
      { name: "Salty Foods & Chips", desc: "Induces severe sodium toxicosis, kidney stress, and death." },
      { name: "Caffeine & Soda", desc: "Avian hearts are highly sensitive; triggers fatal arrhythmias." }
    ],
    dietFreq: "Nestlings: Every 2 hours. Fledglings: 3 times daily. Adults: Accessible constant seeds/pellets in cups.",
    waterNeed: "Provide fresh clean water in a shallow, clip-on cup changed twice daily.",
    hygiene: {
      fleas: "Mites and lice are common in wild birds. Use a bird-safe pyrethrin spray recommended by an avian vet.",
      bath: "Never force a bird into water. Provide a flat ceramic dish with 1cm of clean water. They will bathe themselves.",
      space: "Clean the cage bottom tray daily. Disinfect perches with pet-safe soap monthly."
    },
    lifestyle: {
      sleep: "Birds require 10-12 hours of sleep. Cover their cage with a dark, breathable cloth to block out lights.",
      exercise: "Allow 1-2 hours of supervised free-flight inside a safe, closed room with windows covered.",
      diseases: "Psittacosis (respiratory, contagious to humans), Crop Infection (sour crop), Egg Binding in females. Seek avian vet."
    }
  },
  rabbit: {
    title: "Rabbit Care Manual",
    subtitle: "Comprehensive details on gut stasis prevention, unlimited Timothy hay, and gentle holding techniques.",
    iconClass: "fa-carrot",
    bgClass: "bg-rabbit",
    rescueProtocol: {
      safety: "Rabbits are extremely high-stress prey animals. A sudden loud noise or rough grab can literally rupture their heart or break their fragile spine. Approach quietly, throw a soft towel over them, and pick them up supporting their hindquarters at all times. Never pick a rabbit up by their ears.",
      stabilize: "Set up a clean, enclosed pen lined with fleece (bare floors slip their paws). Keep dogs and cats completely out of sight and hearing range.",
      hydration: "Dehydrated rabbits will refuse dry food, bringing on fatal GI Stasis. Offer fresh water in a heavy ceramic bowl. If weak, feed them critical care formula mixed with warm water via dropper."
    },
    timeline: [
      {
        stage: "Newborn puppy",
        ageRange: "0-2 weeks",
        vax: "No Vaccines Yet",
        food: "Kitten Milk Replacer (KMR) mixed with heavy whipping cream. Fed only twice daily (usually at dawn and dusk).",
        tips: "Rescued wild babies should be left alone if found in nest; mother rabbits only feed them for 5 minutes a day.",
        precautions: "Do not overfeed. Their stomachs are extremely delicate. Keep their nest completely dark."
      },
      {
        stage: "2 weeks",
        ageRange: "2-4 weeks",
        vax: "No Vaccines",
        food: "Milk formula continues twice daily. Baby rabbits will begin tasting soft alfalfa hay from their bedding.",
        tips: "Eyes open. Provide a small cardboard box with a low cutout filled with soft meadow hay.",
        precautions: "Never feed vegetables, fruits, or standard pellets yet. This triggers lethal gut bacterial blooms."
      },
      {
        stage: "1 month",
        ageRange: "4-6 weeks",
        vax: "First Vet GI Screen",
        food: "Transition to dry alfalfa pellets and unlimited fresh alfalfa hay. Discontinue milk feeding slowly.",
        tips: "Introduce a litter box with paper bedding and alfalfa hay piled inside. Rabbits poop while eating.",
        precautions: "Maintain strict clean water. Do not expose them to damp drafts or direct burning sunlight."
      },
      {
        stage: "3 months",
        ageRange: "8-12 weeks",
        vax: "RHDV2 Vaccine Shot 1",
        food: "Unlimited Timothy hay and orchard grass. Transition away from alfalfa hay. Limit pellets to 1/4 cup daily.",
        tips: "Introduce tiny portions of dark leafy greens (one sprig of romaine lettuce) to test their digestive tolerance.",
        precautions: "If the rabbit stops eating for even 12 hours, treat it as a critical life-threatening emergency (GI Stasis)."
      },
      {
        stage: "6 months",
        ageRange: "4-6 months",
        vax: "RHDV2 booster",
        food: "Unlimited Timothy hay, fresh daily greens (cilantro, parsley), and measured rabbit pellets.",
        tips: "Rabbits reach sexual maturity. Spay or neuter them to prevent intense spraying and aggressive chewing.",
        precautions: "Cover all electrical cables and wires. Rabbits will chew cords instinctively, risking electrocution."
      },
      {
        stage: "1 year",
        ageRange: "10-12 months",
        vax: "Annual RHDV2 Booster",
        food: "90% Timothy hay, fresh greens daily. Keep commercial pellets to a tiny scoop daily.",
        tips: "Provide wooden chew blocks to naturally grind down their teeth, which grow continuously throughout life.",
        precautions: "Never lift a rabbit by its stomach. Support their back legs, otherwise they can kick and break their own spine."
      },
      {
        stage: "Adult dog",
        ageRange: "1 year+",
        vax: "Annual Wellness & Dental Check",
        food: "Timothy hay (unlimited), daily cup of fresh greens, low-cal pellets. Fruits as rare treats only.",
        tips: "Provide a spacious exercise pen (not a small cage). Let them zoom and perform 'binkies' daily.",
        precautions: "Look out for watery eyes, drooling, or grinding teeth loudly (indicates painful molar spur dental disease)."
      }
    ],
    safeFoods: [
      { name: "Timothy Hay & Orchard Grass", desc: "90% of their diet. Essential for grinding teeth and keeping gut moving." },
      { name: "Romaine Lettuce & Cilantro", desc: "Hydrating, packed with Vitamin A, gentle on sensitive GI tracts." },
      { name: "Small Slice of Banana", desc: "Extremely popular treat, feed strictly under 1 inch to avoid obesity." },
      { name: "Fresh Mint & Dill", desc: "Highly fragrant greens that encourage sick rabbits to start eating." }
    ],
    toxicFoods: [
      { name: "Iceberg Lettuce", desc: "Contains lactucarium, which causes severe chemical diarrhea in rabbits." },
      { name: "Yogurt Drops & Dairy", desc: "Lethal! Rabbit guts lack the enzymes to process dairy sugar." },
      { name: "Onions & Potatoes", desc: "High starch and sugars cause fatal toxic cecal dysbiosis." },
      { name: "Avocado", desc: "High fat content triggers gut stasis and contains toxic persin." }
    ],
    dietFreq: "Timothy hay must be constantly available 24/7. Greens: once daily. Pellets: twice daily in tiny scoops.",
    waterNeed: "Rabbits drink as much as a 10kg dog. Keep a heavy ceramic water bowl constantly filled.",
    hygiene: {
      fleas: "Never use Frontline (Fipronil) on rabbits. It is highly toxic and causes death. Use Revolution (Selamectin) under vet advice.",
      bath: "Never bathe a rabbit. Getting wet triggers extreme shock that can be fatal. Spot-clean soiled paws with a damp towel instead.",
      space: "Clean their litter box every 2 days. Use pet-safe vinegar to dissolve stubborn calcium urine scaling."
    },
    lifestyle: {
      sleep: "Rabbits sleep 8-10 hours, mostly during midday. Provide cardboard tunnels or boxes with two entrance/exit holes.",
      exercise: "At least 4 hours of daily supervised out-of-cage floor time. Provide cardboard tubes to chew.",
      diseases: "GI Stasis (lethal gut slowdown), Snuffles (respiratory infection), Ear Mites. GI Stasis requires immediate vet fluids."
    }
  },
  fish: {
    title: "Fish Care Manual",
    subtitle: "Procedures for setting up emergency tanks, understanding nitrogen cycles, and water balance guidelines.",
    iconClass: "fa-fish",
    bgClass: "bg-fish",
    rescueProtocol: {
      safety: "Never handle a fish with bare dry hands. This wipes off their protective slime coat, exposing them to bacterial infections. Use a soft, wet fish net. Keep their transport container covered to prevent jumping.",
      stabilize: "In emergencies (e.g., found dumped in a cup), place them in a clean container filled with tap water treated with a water conditioner (dechlorinator) immediately. Raw tap water contains chlorine, which burns their gills.",
      hydration: "N/A. Instead, focus on oxygenation. If no air pump is handy, scoop water and pour it back in from a height to create bubbles and oxygenate the temporary tank."
    },
    timeline: [
      {
        stage: "Newborn puppy",
        ageRange: "0-2 weeks",
        vax: "No Vaccines",
        food: "Infusoria, liquid fry food, or freshly hatched brine shrimp (Artemia) fed 4-5 times daily in tiny drops.",
        tips: "Keep fry in a separate breeding net or tiny tank to prevent them from being eaten by adult fish.",
        precautions: "Perform daily 10% water changes using sponge filters only. Do not use high-flow power filters."
      },
      {
        stage: "2 weeks",
        ageRange: "2-4 weeks",
        vax: "No Vaccines",
        food: "Microworms, baby brine shrimp, or finely powdered flakes fed 3-4 times daily.",
        tips: "Ensure temperature is highly stable using a preset aquarium heater (typically 24-26°C for tropical fish).",
        precautions: "Monitor water parameters closely. High ammonia levels are fatal to developing fry."
      },
      {
        stage: "1 month",
        ageRange: "4-6 weeks",
        vax: "Water Parameter Audit 1",
        food: "Crushed flakes, freeze-dried daphnia, or micro pellets 3 times daily.",
        tips: "Begin transitioning to a low-flow hang-on-back filter with a pre-filter intake sponge.",
        precautions: "Avoid overfeeding. Uneaten food decays rapidly, triggering toxic ammonia spikes."
      },
      {
        stage: "3 months",
        ageRange: "8-12 weeks",
        vax: "No Vaccines",
        food: "Standard fish flakes, small pellets, or frozen bloodworms twice daily.",
        tips: "Check water parameters (Ammonia: 0ppm, Nitrite: 0ppm, Nitrate: <20ppm) using a liquid test kit.",
        precautions: "Never wash aquarium filter media in tap water. The chlorine will instantly kill all beneficial nitrifying bacteria."
      },
      {
        stage: "6 months",
        ageRange: "4-6 months",
        vax: "Filter Routine Review",
        food: "High-quality flakes, specialized pellets, and blanched peas (for digestive health) twice daily.",
        tips: "Perform a weekly 20% water change using a gravel vacuum to siphon out fish waste from substrate.",
        precautions: "Do not add new tank mates without a 2-week quarantine to prevent introducing parasites like Ich."
      },
      {
        stage: "1 year",
        ageRange: "10-12 months",
        vax: "None",
        food: "Balanced adult fish flakes or pellets. Restrict feeding to once daily, with a fast day weekly.",
        tips: "Clean filter impeller and hoses. Ensure tank lights are off for 10-12 hours daily to prevent massive algae blooms.",
        precautions: "Check heater functionality. Old heaters can malfunction and overheat, killing the entire tank."
      },
      {
        stage: "Adult dog",
        ageRange: "1 year+",
        vax: "None",
        food: "Standard adult diet based on species (herbivore vs carnivore).",
        tips: "Maintain a stable schedule of weekly water changes and monthly filter maintenance.",
        precautions: "Look out for pineconing scales, white spots (Ich), or clamped fins (signs of high stress or illness)."
      }
    ],
    safeFoods: [
      { name: "Premium Pellets & Flakes", desc: "Provides balanced nutrition tailored to fish species." },
      { name: "Frozen Bloodworms", desc: "Excellent high-protein treat, feed sparingly once a week." },
      { name: "Blanched De-shelled Peas", desc: "Natural laxative, helps cure floaty swim bladder issues." },
      { name: "Freeze-dried Daphnia", desc: "Provides roughage to prevent bloating in small tropical fish." }
    ],
    toxicFoods: [
      { name: "Breadcrumbs & Crackers", desc: "Swells inside their stomachs, causing lethal gut blockages." },
      { name: "Raw Land Mammal Meat", desc: "Fish cannot digest mammalian fats, leading to fatty liver disease." },
      { name: "Spoiled / Decayed Flakes", desc: "Can introduce toxic mold or bacterial infections into water." },
      { name: "Overfed Leftovers", desc: "Rotting food depletes oxygen, creating lethal ammonia gas spikes." }
    ],
    dietFreq: "Fry: 4-5 times daily. Juveniles: 2-3 times daily. Stable Adults: Once daily (only what they eat in 2 minutes).",
    waterNeed: "Requires constant water filtration. Keep tank dechlorinated and cycled before introducing fish.",
    hygiene: {
      fleas: "Inspect for external parasites like Anchor Worms or Ich (white spots). Use specialized copper/aquarium medications.",
      bath: "N/A. Instead, perform 20-30% partial water changes weekly. Never wash decorations in raw soapy tap water.",
      space: "Keep the tank hood closed. Fish can jump out, especially when stressed or acclimating."
    },
    lifestyle: {
      sleep: "Fish rest at night. Keep aquarium lights completely off for 10-12 hours to maintain their circadian rhythm.",
      exercise: "Provide ample swimming space, rocks, and live aquatic plants (Java Fern, Anubias) for hideouts.",
      diseases: "Ich (white spots), Fin Rot (ragged fins), Swim Bladder Disease (floating upside down). Treat immediately."
    }
  },
  turtle: {
    title: "Turtle Care Manual",
    subtitle: "Technical guidelines on UVB heating lamps, basking docks, and specialized reptilian dietary schedules.",
    iconClass: "fa-shield-cat",
    bgClass: "bg-turtle",
    rescueProtocol: {
      safety: "Turtles (especially Snapping Turtles) can bite severely and lock their jaws. Hold them securely from the rear third of their shell. Do not place fingers near their front head or mouth. Wash hands with soap immediately (turtles carry Salmonella).",
      stabilize: "Place them in a dry, warm plastic container with high walls. Do not place them in deep water immediately; weak or injured turtles can drown if they cannot lift their heads to breathe.",
      hydration: "If dehydrated, place the turtle in a shallow tray of lukewarm water (water level should barely reach their chin) for 20 minutes daily. They absorb water through their cloaca."
    },
    timeline: [
      {
        stage: "Newborn puppy",
        ageRange: "0-2 weeks",
        vax: "No Vaccines",
        food: "High-protein hatchling turtle pellets, tiny pieces of earthworms fed daily.",
        tips: "Hatchlings require extremely warm basking zones (32-35°C) and clean shallow water to prevent drowning.",
        precautions: "Ensure a dedicated UVB lamp is active 12 hours a day. Without UVB, their shells fail to harden, leading to death."
      },
      {
        stage: "2 weeks",
        ageRange: "2-4 weeks",
        vax: "None",
        food: "Hatchling pellets, baby shrimp, and tiny pieces of leafy greens daily.",
        tips: "Ensure tank contains a dry basking dock where the turtle can climb completely out of the water to dry off.",
        precautions: "Monitor for shell rot (soft white spots). Keep water filtration strong."
      },
      {
        stage: "1 month",
        ageRange: "4-6 weeks",
        vax: "None",
        food: "Standard pellets, bloodworms, and daily fresh romaine lettuce.",
        tips: "Perform bi-weekly water changes. Check filter performance weekly (turtles produce heavy amounts of waste).",
        precautions: "Do not feed raw fish containing thiaminase (like goldfish), which blocks Vitamin B absorption."
      },
      {
        stage: "3 months",
        ageRange: "8-12 weeks",
        vax: "Vet Shell Integrity Review",
        food: "Measured pellets daily, along with fresh leafy greens (dandelion, romaine).",
        tips: "Verify that both heat lamp and UVB bulb are positioned exactly 25-30cm above the basking spot.",
        precautions: "UVB bulbs stop emitting UVB rays after 6-9 months even if they still emit visible light. Change bulbs regularly."
      },
      {
        stage: "6 months",
        ageRange: "4-6 months",
        vax: "None",
        food: "Pellets fed every other day, with unlimited green vegetables available constant.",
        tips: "Introduce cuttlebone pieces (without hard backing) into the water for calcium supplementation.",
        precautions: "Avoid handling them unnecessarily. Turtles are easily stressed by human contact."
      },
      {
        stage: "1 year",
        ageRange: "10-12 months",
        vax: "Wellness Checkup",
        food: "Transition slowly to adult diet: 50% pellets, 50% vegetables. Feed pellets 3 times a week.",
        tips: "Ensure tank size is appropriate: a good rule of thumb is 10 gallons of water per inch of shell length.",
        precautions: "Prevent shell curling by maintaining proper diet and regular exposure to high-quality UVB rays."
      },
      {
        stage: "Adult dog",
        ageRange: "1 year+",
        vax: "Annual Parasite Screening",
        food: "Adult pellets fed 2-3 times a week, greens daily, and occasional protein treats.",
        tips: "Keep basking zone stable. Deep-clean the external canister filter every 3 months.",
        precautions: "Look out for swollen eyes, bubbles from nose, or swimming lopsided (hallmarks of a deadly respiratory infection)."
      }
    ],
    safeFoods: [
      { name: "Specialized Turtle Pellets", desc: "Provides balanced reptile vitamins, calcium, and minerals." },
      { name: "Romaine & Dandelion Greens", desc: "High calcium-to-phosphorus ratio, ideal daily forage." },
      { name: "Boiled Earthworms", desc: "Excellent high-protein treat for growing juveniles." },
      { name: "Cuttlebone (Backing Removed)", desc: "Allows turtles to chew and obtain natural calcium." }
    ],
    toxicFoods: [
      { name: "Raw Chicken or Beef", desc: "Too high in fats, causes rapid obesity and organ strain." },
      { name: "Spinach & Beet Greens", desc: "Contains oxalates that bind calcium, causing soft shell disease." },
      { name: "Feeder Goldfish", desc: "Contains high thiaminase levels, causing Vitamin B deficiencies." },
      { name: "Processed Human Food", desc: "Lactose, sugars, and preservatives are toxic to their organs." }
    ],
    dietFreq: "Hatchlings: Daily. Adults: Pellets 2 to 3 times a week; fresh greens daily.",
    waterNeed: "Requires clean, highly filtered deep swimming water. Keep water pH balanced between 6.5 and 8.0.",
    hygiene: {
      fleas: "Check for leeches or shell algae. Soft-brush the shell gently under running dechlorinated water once a month.",
      bath: "Never use human soaps or detergents. Spot clean shell using a soft toothbrush and warm water.",
      space: "Wash your hands with antibacterial soap for 30 seconds immediately after handling a turtle or their tank."
    },
    lifestyle: {
      sleep: "Turtles sleep underwater or on dry land. Turn off tank lights for 12 hours at night.",
      exercise: "Provide deep swimming space and floating logs. Let them roam securely in a safe, sunny garden space occasionally.",
      diseases: "Respiratory Infection (floating sideways, nasal bubbles), Soft Shell Disease (lack of UVB/calcium). Urgent vet required."
    }
  }
};

const SAMPLE_VETS = [
  { name: "Paws & Claws Veterinary Hospital", rating: 4.8, phone: "+1 (503) 555-0120", address: "1420 NE Sandy Blvd, Portland, OR", open: true, lat: 45.528, lng: -122.651, desc: "24/7 street pet rescue clinic. Offers 50% discount on rescues." },
  { name: "Green Valley Animal Clinic", rating: 4.6, phone: "+1 (503) 555-0164", address: "7820 SW Capitol Hwy, Portland, OR", open: true, lat: 45.467, lng: -122.709, desc: "Specializes in canine parvovirus treatment and street kitten critical care." },
  { name: "Rose City Veterinary Center", rating: 4.9, phone: "+1 (503) 555-0199", address: "809 SE Powell Blvd, Portland, OR", open: false, lat: 45.497, lng: -122.657, desc: "A top-tier veterinary surgical clinic with specialized avian and exotic veterinarians." },
  { name: "Stray Hope Charity Animal Clinic", rating: 4.7, phone: "+1 (503) 555-0210", address: "3400 N Interstate Ave, Portland, OR", open: true, lat: 45.548, lng: -122.682, desc: "A non-profit veterinary hospital focused solely on checking and healing abandoned street animals." }
];

const INITIAL_ADOPTIONS = [
  { id: 1, name: "Lucky", species: "dog", age: "3 months", gender: "Male", location: "Portland Downtown", desc: "Found wet and shivering in a cardboard box behind a diner. He is extremely sweet, dewormed, has received his first DHPP shot, and loves cuddling on soft carpets.", phone: "+1 (503) 555-8910", img: "lucky_dog.png" },
  { id: 2, name: "Whiskers", species: "cat", age: "6 months", gender: "Female", location: "SE Industrial District", desc: "Rescued from an abandoned warehouse gutter. She was severely dehydrated but is now fully healthy, litter trained, loves chasing laser toys, and is super social.", phone: "+1 (503) 555-2241", img: "whiskers_cat.png" },
  { id: 3, name: "Pip", species: "other", age: "4 weeks", gender: "Male", location: "Green Hill Park", desc: "A wild baby rabbit found stranded near a busy highway after his nest was destroyed. Hand-reared on critical KMR formula, now happily eating hay and ready for a quiet rabbit-proof home.", phone: "+1 (503) 555-4039", img: "pip_rabbit.png" }
];

// --- 2. Application Core State Controller ---
const AppState = {
  activeView: "home",
  activePetGuide: "dog",
  darkTheme: false,
  vetMap: null,
  vetMarkers: [],
  adoptionListings: [],
  growthLogs: {},
  vaccineRecords: {}
};

// --- 3. Initial Setup & Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initThemes();
  initRouter();
  initData();
  setupEventListeners();
  loadGuideDetails("dog");
  renderNearbyVets(SAMPLE_VETS);
  initLeafletMap();
});

// --- 4. Toast Notifications Engine ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "fa-circle-check";
  if (type === "info") icon = "fa-circle-info";
  if (type === "warning") icon = "fa-circle-exclamation";
  if (type === "danger") icon = "fa-triangle-exclamation";

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove
  setTimeout(() => {
    toast.style.animation = "fadeOut 0.4s ease forwards";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// --- 5. Theme State Controller (Light / Dark Mode) ---
function initThemes() {
  const savedTheme = localStorage.getItem("petcare-dark-theme");
  if (savedTheme === "true") {
    AppState.darkTheme = true;
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    updateThemeTogglerIcon(true);
  } else {
    AppState.darkTheme = false;
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    updateThemeTogglerIcon(false);
  }
}

function toggleTheme() {
  AppState.darkTheme = !AppState.darkTheme;
  if (AppState.darkTheme) {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("petcare-dark-theme", "true");
    updateThemeTogglerIcon(true);
    showToast("Dark Mode enabled 🌙", "info");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("petcare-dark-theme", "false");
    updateThemeTogglerIcon(false);
    showToast("Light Mode enabled ☀️", "info");
  }
}

function updateThemeTogglerIcon(isDark) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }
}

// --- 6. Client-Side SPA Router ---
function initRouter() {
  const handleNav = (targetId) => {
    // Hide all views
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });
    
    // Show correct section
    const targetSection = document.getElementById(`${targetId}-view`);
    if (targetSection) {
      targetSection.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Set active nav link states
    document.querySelectorAll(".nav-link, .mobile-link").forEach(link => {
      if (link.getAttribute("data-target") === targetId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    AppState.activeView = targetId;

    // Redraw map on view trigger to fix leaflet sizing glitches
    if (targetId === "vets" && AppState.vetMap) {
      setTimeout(() => AppState.vetMap.invalidateSize(), 300);
    }
  };

  // Listen to standard header clicks
  document.querySelectorAll("[data-target]").forEach(element => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const target = element.getAttribute("data-target");
      handleNav(target);
      // Close mobile drawer
      document.getElementById("mobile-drawer").classList.remove("open");
      document.getElementById("mobile-menu-btn").classList.remove("open");
    });
  });

  // Learn more pillar links inside Home View
  document.querySelectorAll("[data-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-link");
      handleNav(target);
    });
  });

  // Logo home navigate click
  document.getElementById("logo-nav").addEventListener("click", (e) => {
    e.preventDefault();
    handleNav("home");
  });

  // Back to home button inside Guide
  document.getElementById("btn-back-home").addEventListener("click", () => {
    handleNav("home");
  });

  // Mobile menu button
  const burger = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    drawer.classList.toggle("open");
  });

  // Listen to hash changes in case of bookmark links
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (["home", "guides", "feeding", "rescue", "vets", "adoption"].includes(hash)) {
      handleNav(hash);
    }
  });

  // Initial routing
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash) {
    handleNav(initialHash);
  }
}

// --- 7. Data Loader & LocalStorage Syncer ---
function initData() {
  // Load adoption listings
  const localAdoptions = localStorage.getItem("petcare-adoptions");
  if (localAdoptions) {
    AppState.adoptionListings = JSON.parse(localAdoptions);
  } else {
    AppState.adoptionListings = [...INITIAL_ADOPTIONS];
    localStorage.setItem("petcare-adoptions", JSON.stringify(INITIAL_ADOPTIONS));
  }
  renderAdoptionCards(AppState.adoptionListings);

  // Load growth logs
  const localGrowth = localStorage.getItem("petcare-growth-logs");
  if (localGrowth) {
    AppState.growthLogs = JSON.parse(localGrowth);
  }

  // Load vaccine records
  const localVax = localStorage.getItem("petcare-vaccine-records");
  if (localVax) {
    AppState.vaccineRecords = JSON.parse(localVax);
  }
}

// --- 8. Pet Guides Rendering Engine (Timelines & Accordions) ---
function loadGuideDetails(petKey) {
  const data = PET_CARE_DATA[petKey];
  if (!data) return;

  AppState.activePetGuide = petKey;

  // Render headers
  document.getElementById("guide-title").innerText = data.title;
  document.getElementById("guide-subtitle").innerText = data.subtitle;
  
  const heroIcon = document.getElementById("guide-hero-icon");
  heroIcon.className = `pet-icon-large ${data.bgClass}`;
  heroIcon.innerHTML = `<i class="fa-solid ${data.iconClass}"></i>`;

  // Render First Aid/Rescue block text
  document.getElementById("rescue-safety-info").innerText = data.rescueProtocol.safety;
  document.getElementById("rescue-stabilize-info").innerText = data.rescueProtocol.stabilize;
  document.getElementById("rescue-hydrate-info").innerText = data.rescueProtocol.hydration;

  // Render safe/toxic foods in the small guide panel
  const safeList = document.getElementById("food-safe-list");
  const toxicList = document.getElementById("food-toxic-list");
  safeList.innerHTML = "";
  toxicList.innerHTML = "";
  
  data.safeFoods.slice(0, 3).forEach(food => {
    safeList.innerHTML += `<li>${food.name}</li>`;
  });
  data.toxicFoods.slice(0, 3).forEach(food => {
    toxicList.innerHTML += `<li>${food.name}</li>`;
  });

  document.getElementById("food-frequency-text").innerText = data.dietFreq;
  document.getElementById("food-water-text").innerText = data.waterNeed;

  // Render Hygiene
  document.getElementById("hygiene-fleas").innerText = data.hygiene.fleas;
  document.getElementById("hygiene-bath").innerText = data.hygiene.bath;
  document.getElementById("hygiene-space").innerText = data.hygiene.space;

  // Render Lifestyle
  document.getElementById("lifestyle-sleep").innerText = data.lifestyle.sleep;
  document.getElementById("lifestyle-exercise").innerText = data.lifestyle.exercise;
  document.getElementById("lifestyle-diseases").innerText = data.lifestyle.diseases;

  // Render Timeline Elements
  setupTimelineSlider(data.timeline);
  renderTimelineStage(0, data.timeline);

  // Sync Switcher Selector values
  document.getElementById("guide-pet-switcher").value = petKey;

  // Reset tools
  document.getElementById("calc-species").value = petKey;
  resetVaccineTracker(petKey);
  renderGrowthLogs(petKey);
}

function setupTimelineSlider(timelineData) {
  const container = document.getElementById("timeline-labels-container");
  container.innerHTML = "";
  
  timelineData.forEach((item, index) => {
    const node = document.createElement("span");
    node.className = `slider-label-node ${index === 0 ? 'active' : ''}`;
    node.innerText = item.stage.split(" ")[0]; // First word of stage
    node.addEventListener("click", () => {
      document.getElementById("timeline-range").value = index;
      updateSliderVisuals(index, timelineData);
    });
    container.appendChild(node);
  });

  const rangeInput = document.getElementById("timeline-range");
  rangeInput.max = timelineData.length - 1;
  rangeInput.value = 0;
  
  // Set slider bar fill
  updateSliderVisuals(0, timelineData);
}

function updateSliderVisuals(index, timelineData) {
  const percent = (index / (timelineData.length - 1)) * 100;
  document.getElementById("timeline-indicator-bar").style.width = `${percent}%`;

  // Update label visual highlights
  document.querySelectorAll(".slider-label-node").forEach((node, idx) => {
    if (idx === parseInt(index)) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
  });

  renderTimelineStage(index, timelineData);
}

function renderTimelineStage(index, timelineData) {
  const stage = timelineData[index];
  if (!stage) return;

  document.getElementById("stage-age-title").innerText = `${stage.stage} (${stage.ageRange})`;
  document.getElementById("stage-vax-status").innerHTML = `<i class="fa-solid fa-syringe"></i> ${stage.vax}`;
  document.getElementById("stage-food-text").innerText = stage.food;
  document.getElementById("stage-care-text").innerText = stage.tips;
  document.getElementById("stage-precaution-text").innerText = stage.precautions;
}

// --- 9. Interactive Feeding Guide Rendering ---
function renderFeedingTab(petKey) {
  const data = PET_CARE_DATA[petKey];
  if (!data) return;

  const safeScroller = document.getElementById("safe-foods-scroller");
  const toxicScroller = document.getElementById("toxic-foods-scroller");
  const milestonesArea = document.getElementById("feed-milestones-area");

  safeScroller.innerHTML = "";
  toxicScroller.innerHTML = "";
  milestonesArea.innerHTML = "";

  // Render safe foods
  data.safeFoods.forEach(food => {
    safeScroller.innerHTML += `
      <div class="safety-food-item">
        <strong>${food.name}</strong>
        <span>${food.desc}</span>
      </div>
    `;
  });

  // Render toxic foods
  data.toxicFoods.forEach(food => {
    toxicScroller.innerHTML += `
      <div class="safety-food-item">
        <strong>${food.name}</strong>
        <span>${food.desc}</span>
      </div>
    `;
  });

  // Render frequency blocks
  milestonesArea.innerHTML = `
    <div class="freq-node">
      <strong>Standard Frequency</strong>
      <span>${data.dietFreq}</span>
    </div>
    <div class="freq-node">
      <strong>Water Intake Rule</strong>
      <span>${data.waterNeed}</span>
    </div>
    <div class="freq-node">
      <strong>Starvation Protocol</strong>
      <span>Rescued street animals must be fed wet food or high-moisture slurry in tiny amounts every 3 hours initially. Do not overload their empty stomachs.</span>
    </div>
  `;

  // Reset filter input
  document.getElementById("food-item-filter").value = "";
}

function filterFoods(searchTerm) {
  const items = document.querySelectorAll(".safety-food-item");
  const term = searchTerm.toLowerCase();
  
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    if (text.includes(term)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function calculateWaterNeeds(weight) {
  const box = document.getElementById("water-result-box");
  const val = document.getElementById("water-needed-val");
  
  if (!weight || weight <= 0) {
    showToast("Please enter a valid weight in kg.", "warning");
    return;
  }

  // General rule of thumb: 50-70ml water per kg
  const minVal = Math.round(weight * 50);
  const maxVal = Math.round(weight * 70);

  val.innerText = `${minVal} - ${maxVal} ml`;
  box.classList.remove("hidden");
}

// --- 10. Nearby Vet Finder Map Integration (Leaflet.js) ---
function initLeafletMap() {
  // Mount leaflet map container in Portland default coordinates
  const defaultLat = 45.5122;
  const defaultLng = -122.6587;
  
  AppState.vetMap = L.map('vet-leaflet-map', {
    scrollWheelZoom: false
  }).setView([defaultLat, defaultLng], 12);

  // Add highly aesthetic cartographic layers (CartoDB voyager light)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
  }).addTo(AppState.vetMap);

  // Add initial vet markers
  plotVetMarkers(SAMPLE_VETS);
}

function plotVetMarkers(vets) {
  // Clear any existing markers
  AppState.vetMarkers.forEach(m => AppState.vetMap.removeLayer(m));
  AppState.vetMarkers = [];

  const bounds = [];

  vets.forEach(vet => {
    // Custom teal paw icon
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `<div class="map-pin-circle bg-green"><i class="fa-solid fa-house-medical"></i></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36]
    });

    const marker = L.marker([vet.lat, vet.lng], { icon: customIcon }).addTo(AppState.vetMap);
    
    // Popup template matching brand colors
    const popupContent = `
      <div class="map-popup-card">
        <h4>${vet.name}</h4>
        <p class="pop-addr"><i class="fa-solid fa-map-location-dot"></i> ${vet.address}</p>
        <p class="pop-phone"><i class="fa-solid fa-phone"></i> ${vet.phone}</p>
        <p class="pop-desc">${vet.desc}</p>
      </div>
    `;

    marker.bindPopup(popupContent);
    AppState.vetMarkers.push(marker);
    bounds.push([vet.lat, vet.lng]);
  });

  if (bounds.length > 0 && AppState.vetMap) {
    AppState.vetMap.fitBounds(bounds, { padding: [50, 50] });
  }
}

function renderNearbyVets(vetsList) {
  const container = document.getElementById("vets-list-container");
  container.innerHTML = "";

  if (vetsList.length === 0) {
    container.innerHTML = `<div class="empty-list-txt glass-panel">No clinics found matching the criteria.</div>`;
    return;
  }

  vetsList.forEach((vet, index) => {
    const card = document.createElement("div");
    card.className = "vet-card glass-panel";
    card.setAttribute("data-index", index);
    
    const statusClass = vet.open ? "open" : "closed";
    const statusTxt = vet.open ? "Open Now" : "Closed";

    card.innerHTML = `
      <div class="vet-card-header">
        <h4>${vet.name}</h4>
        <span class="vet-rating"><i class="fa-solid fa-star"></i> ${vet.rating}</span>
      </div>
      <p class="vet-info-row"><i class="fa-solid fa-location-dot"></i> ${vet.address}</p>
      <p class="vet-info-row"><i class="fa-solid fa-phone"></i> ${vet.phone}</p>
      <div class="vet-card-footer">
        <span class="vet-status ${statusClass}">${statusTxt}</span>
        <a href="tel:${vet.phone.replace(/[^0-9+]/g, '')}" class="btn-vet-call"><i class="fa-solid fa-phone"></i> Call Clinic</a>
      </div>
    `;

    // Click marker center binding
    card.addEventListener("click", () => {
      document.querySelectorAll(".vet-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      
      const marker = AppState.vetMarkers[index];
      if (marker && AppState.vetMap) {
        AppState.vetMap.setView([vet.lat, vet.lng], 15);
        marker.openPopup();
      }
    });

    container.appendChild(card);
  });
}

function filterVets(term, statusFilter) {
  const query = term.toLowerCase();
  const filtered = SAMPLE_VETS.filter(vet => {
    const nameMatch = vet.name.toLowerCase().includes(query) || vet.address.toLowerCase().includes(query);
    const openMatch = statusFilter === "all" || (statusFilter === "open" && vet.open);
    return nameMatch && openMatch;
  });

  renderNearbyVets(filtered);
  plotVetMarkers(filtered);
}

// --- 11. Adoption Hub (LocalStorage upload & listing filters) ---
function renderAdoptionCards(listings) {
  const container = document.getElementById("adoption-feed-container");
  container.innerHTML = "";

  if (listings.length === 0) {
    container.innerHTML = `
      <div class="empty-feed-card glass-card text-center" style="grid-column: 1/-1; padding: 40px;">
        <i class="fa-solid fa-heart-broken text-orange" style="font-size: 3rem; margin-bottom: 20px;"></i>
        <h3>No Strays Posted Yet</h3>
        <p>Be the first to list a rescued stray looking for a safe home!</p>
      </div>
    `;
    return;
  }

  listings.forEach(pet => {
    const card = document.createElement("div");
    card.className = "adopt-card glass-card animate-hover-up";
    
    // Dynamic image or placeholder
    const imageHtml = pet.img ? 
      `<img src="${pet.img}" alt="${pet.name}">` : 
      `<div class="adopt-spec-avatar"><i class="fa-solid fa-${pet.species === 'dog' ? 'dog' : (pet.species === 'cat' ? 'cat' : 'shield-cat')}"></i></div>`;

    const badgeClass = pet.species === "dog" ? "bg-dog" : (pet.species === "cat" ? "bg-cat" : "bg-other");

    card.innerHTML = `
      <div class="adopt-img-wrap">
        ${imageHtml}
        <span class="adopt-badge ${badgeClass}">${pet.species.toUpperCase()}</span>
      </div>
      <div class="adopt-card-body">
        <div class="adopt-meta-row">
          <span>${pet.gender}</span>
          <span>${pet.age}</span>
        </div>
        <h3>${pet.name}</h3>
        <p class="adopt-desc">${pet.desc}</p>
        <div class="adopt-loc-row">
          <i class="fa-solid fa-location-dot"></i>
          <span>${pet.location}</span>
        </div>
        <a href="tel:${pet.phone}" class="btn btn-secondary btn-full btn-adopt-contact"><i class="fa-solid fa-phone"></i> Contact Foster</a>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterAdoptionFeed(species) {
  let listings = AppState.adoptionListings;
  if (species !== "all") {
    listings = AppState.adoptionListings.filter(pet => {
      if (species === "other") {
        return pet.species !== "dog" && pet.species !== "cat";
      }
      return pet.species === species;
    });
  }
  renderAdoptionCards(listings);
}

// --- 12. Smart Optional Features logic ---

// Widget A: Pet Age Calculator
function calculatePetAge(species, value, unit) {
  const resultArea = document.getElementById("calc-result-area");
  const humanYearsSpan = document.getElementById("calc-res-human-years");
  const stageHeader = document.getElementById("calc-res-stage");
  const advicePara = document.getElementById("calc-res-advice");

  if (!value || value <= 0) {
    showToast("Please enter a valid age value.", "warning");
    return;
  }

  // Convert unit to months
  let ageInMonths = 0;
  if (unit === "weeks") ageInMonths = value / 4.3;
  else if (unit === "months") ageInMonths = parseFloat(value);
  else if (unit === "years") ageInMonths = value * 12;

  let humanYears = 0;
  let stageName = "";
  let advice = "";

  if (species === "dog") {
    if (ageInMonths <= 2) {
      humanYears = ageInMonths * 2.5;
      stageName = "Infant Puppy";
      advice = "Rescued puppies require feeding every 2-3 hours and high nesting heat. Stimulate urination manually.";
    } else if (ageInMonths <= 12) {
      // First year of dog life equals roughly 15 human years
      humanYears = (ageInMonths / 12) * 15;
      stageName = "Puppy Teenager";
      advice = "Teething is active! Feed high-calcium food. Practice basic training recall and complete DHPP immunization boosters.";
    } else {
      // Each adult dog year equals roughly 6 human years
      const adultYears = ageInMonths / 12;
      humanYears = 15 + (adultYears - 1) * 6;
      stageName = "Adult Dog";
      advice = "Balanced active phase. Transition to adult dry kibble twice daily. Ensure at least 45 minutes of daily running.";
    }
  } else if (species === "cat") {
    if (ageInMonths <= 2) {
      humanYears = ageInMonths * 2;
      stageName = "Orphaned Kitten";
      advice = "Keep warm on hot pads. Discontinue raw milk immediately. Feed commercial dry slurry formula.";
    } else if (ageInMonths <= 12) {
      humanYears = (ageInMonths / 12) * 15;
      stageName = "Kitten Teenager";
      advice = "Social socialization is critical. Prepare litter boxes and scratch posts. Complete mandatory FVRCP shots.";
    } else {
      const adultYears = ageInMonths / 12;
      humanYears = 15 + (adultYears - 1) * 4; // Cat adult aging is slower
      stageName = "Adult Cat";
      advice = "Maintain wide drinking bowls. Felines enjoy wet food to secure high hydration metrics. Brush coat weekly.";
    }
  } else if (species === "rabbit") {
    humanYears = ageInMonths * 1.5;
    stageName = "Bunny";
    advice = "Feed unlimited Timothy hay 24/7 to maintain gut motility. Avoid high-stress handling, spay/neuter early.";
  } else { // Turtle
    humanYears = ageInMonths * 0.4; // Turtles age extremely slowly
    stageName = "Reptile";
    advice = "Ensure active UVB bulbs are running 12 hours daily. Never let shells soften. Offer shallow warm water soaks.";
  }

  humanYearsSpan.innerText = Math.round(humanYears);
  stageHeader.innerText = `Stage: ${stageName}`;
  advicePara.innerText = advice;

  resultArea.classList.remove("hidden");
  showToast("Age conversion complete! 🐾", "success");
}

// Widget B: Vaccination Milestones Checklist
function resetVaccineTracker(petKey) {
  const card = document.getElementById("vax-schedule-card");
  const itemsContainer = document.getElementById("vax-checklist-items");
  const petNameInput = document.getElementById("vax-pet-name");

  // Load custom values if they exist
  const petName = petNameInput.value.trim() || "Rescued Pet";
  card.classList.remove("hidden");

  let schedules = [];
  if (petKey === "dog") {
    schedules = [
      { id: "dog_vax_1", name: "Deworming Cycle 1", age: "2 Weeks" },
      { id: "dog_vax_2", name: "DHPP Vaccine Shot 1", age: "6 Weeks" },
      { id: "dog_vax_3", name: "DHPP Booster + Rabies Shot", age: "12 Weeks" },
      { id: "dog_vax_4", name: "DHPP Shot 2 Booster", age: "16 Weeks" }
    ];
  } else {
    schedules = [
      { id: "cat_vax_1", name: "Kitten Deworming", age: "3 Weeks" },
      { id: "cat_vax_2", name: "FVRCP Vaccine Shot 1", age: "8 Weeks" },
      { id: "cat_vax_3", name: "FVRCP Booster + Rabies", age: "12 Weeks" },
      { id: "cat_vax_4", name: "FVRCP Shot 2 Booster", age: "16 Weeks" }
    ];
  }

  itemsContainer.innerHTML = "";
  
  // Load saved check status from state or local
  const petRecords = AppState.vaccineRecords[petKey] || {};

  schedules.forEach(vax => {
    const isChecked = petRecords[vax.id] ? "checked" : "";
    const isCheckedInput = petRecords[vax.id] ? "checked" : "";

    const li = document.createElement("li");
    li.className = `vax-item ${isChecked}`;
    li.innerHTML = `
      <label class="vax-label">
        <input type="checkbox" id="${vax.id}" ${isCheckedInput}>
        <span>${vax.name}</span>
      </label>
      <span class="vax-time">${vax.age}</span>
    `;

    // Listen to changes
    li.querySelector("input").addEventListener("change", (e) => {
      const checked = e.target.checked;
      if (checked) {
        li.classList.add("checked");
      } else {
        li.classList.remove("checked");
      }
      updateVaccineProgress(petKey);
    });

    itemsContainer.appendChild(li);
  });

  document.getElementById("vax-card-title").innerText = `${petName}'s Immunization Profile`;
  updateVaccineProgress(petKey);
}

function updateVaccineProgress(petKey) {
  const inputs = document.querySelectorAll("#vax-checklist-items input");
  if (inputs.length === 0) return;

  let checkedCount = 0;
  inputs.forEach(input => {
    if (input.checked) checkedCount++;
  });

  const percent = Math.round((checkedCount / inputs.length) * 100);
  
  document.getElementById("vax-progress-percent").innerText = `${percent}% Completed`;
  document.getElementById("vax-progress-fill").style.width = `${percent}%`;
}

function saveVaccineState(petKey) {
  const records = AppState.vaccineRecords[petKey] || {};
  const inputs = document.querySelectorAll("#vax-checklist-items input");
  
  inputs.forEach(input => {
    records[input.id] = input.checked;
  });

  AppState.vaccineRecords[petKey] = records;
  localStorage.setItem("petcare-vaccine-records", JSON.stringify(AppState.vaccineRecords));
  
  const petName = document.getElementById("vax-pet-name").value.trim() || "Rescued Pet";
  showToast(`Saved immunization schedule for ${petName}! 💉`, "success");
}

function setVaccineAlertNotification() {
  const petName = document.getElementById("vax-pet-name").value.trim() || "Rescued Pet";
  showToast(`Reminder notifications scheduled for ${petName}! ⏰`, "info");
  
  // Prompt standard browser alerts if supported
  if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("PetCare Guide Reminder", {
          body: `Immunization notifications are now scheduled for ${petName}! Check the timeline checklist.`,
          icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/solid/paw.svg"
        });
      }
    });
  }
}

// Widget C: Pet Weight Growth Logs
function renderGrowthLogs(petKey) {
  const body = document.getElementById("growth-table-body");
  body.innerHTML = "";

  const logs = AppState.growthLogs[petKey] || [];
  
  if (logs.length === 0) {
    body.innerHTML = `<tr class="empty-row"><td colspan="4">No weight entries recorded for ${petKey}s. Log one above!</td></tr>`;
    return;
  }

  // Sort logs by date descending
  const sortedLogs = [...logs].sort((a,b) => new Date(b.date) - new Date(a.date));

  sortedLogs.forEach((log, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${log.date}</td>
      <td><strong>${log.weight} kg</strong></td>
      <td>${log.notes || 'N/A'}</td>
      <td>
        <button class="btn-delete-log" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;

    tr.querySelector(".btn-delete-log").addEventListener("click", () => {
      deleteGrowthLog(petKey, index);
    });

    body.appendChild(tr);
  });
}

function addGrowthLog(petKey, date, weight, notes) {
  if (!AppState.growthLogs[petKey]) {
    AppState.growthLogs[petKey] = [];
  }

  AppState.growthLogs[petKey].push({ date, weight, notes });
  localStorage.setItem("petcare-growth-logs", JSON.stringify(AppState.growthLogs));
  
  renderGrowthLogs(petKey);
  showToast("Weight log added successfully! ⚖️", "success");
}

function deleteGrowthLog(petKey, index) {
  if (AppState.growthLogs[petKey]) {
    AppState.growthLogs[petKey].splice(index, 1);
    localStorage.setItem("petcare-growth-logs", JSON.stringify(AppState.growthLogs));
    renderGrowthLogs(petKey);
    showToast("Growth log deleted.", "warning");
  }
}

// --- 13. Smart AI Chatbot ("Pawsy") Logic & Dialog mapping ---
const BOT_RESPONSES = [
  {
    pattern: /dehydrat|thirsty|water|cold|shiver/i,
    reply: "🚨 <strong>Emergency Rehydration Protocol:</strong><br>If the stray is weak or dehydrated, never pour water down its throat (as it can flood the lungs). Instead, rub unflavored Pedialyte or lukewarm sugar water on their lips and gums. If they are alert, offer a flat, shallow bowl of cool water. Do not give raw milk."
  },
  {
    pattern: /chocolate|cocoa|poison|toxic/i,
    reply: "⚠️ <strong>CRITICAL TOXIC ALERT:</strong><br>Chocolate, cocoa, onions, garlic, grapes, and raisins are highly poisonous to both dogs and cats. If you suspect they ingested any of these, count how many grams they ate and rush them to the nearest clinic (use the <em>Nearby Vets</em> tab) immediately to induce vomiting. Do not wait for symptoms!"
  },
  {
    pattern: /injured|bleed|wound|cut|broken bone/i,
    reply: "🩹 <strong>First Aid for Injuries:</strong><br>1. Wrap the animal in a thick towel or blanket to prevent getting scratched or bitten out of self-defense.<br>2. Put clean pressure on bleeding cuts using a sterile dressing.<br>3. Keep the pet completely confined to a box to prevent moving fractured bones.<br>4. Take them directly to the nearest clinic immediately."
  },
  {
    pattern: /milk|formula|newborn|kitten|puppy/i,
    reply: "🍼 <strong>Critical Newborn Care:</strong><br>Standard cow's milk causes severe diarrhea, triggering fatal dehydration in puppies and kittens. You must obtain commercial **Kitten Milk Replacer (KMR)** or **Puppy Esbilac formula**. Feed warm using a syringe or tiny bottle drop-by-drop while the pet is on its tummy. Rub their tummies with warm damp cotton to stimulate urination."
  },
  {
    pattern: /hi|hello|hey|help/i,
    reply: "Hello! 🐾 I am Pawsy, your emergency pet rescue AI. I can guide you on street first aid, food safety, and toxic food questions. Ask me an emergency question like:<br>- <em>'What should I do if a puppy is bleeding?'</em><br>- <em>'Can kittens drink milk?'</em><br>- <em>'How do I treat dehydration?'</em>"
  }
];

function triggerBotReply(query) {
  const container = document.getElementById("chat-messages-container");
  const indicator = document.getElementById("chat-typing-indicator");
  
  // Add User bubble
  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user-message";
  userBubble.innerText = query;
  container.appendChild(userBubble);
  
  // Scroll down
  container.scrollTop = container.scrollHeight;

  // Show typing indicator
  indicator.classList.remove("hidden");

  // Simulate typing delay
  setTimeout(() => {
    indicator.classList.add("hidden");
    
    // Find matching response pattern
    let botText = "I want to help, but I'm not sure about that. 🐾 For stray emergencies, focus on keeping them warm, isolated, and check the <em>Rescue Tips</em> tab for instant guidelines. Try asking about <strong>'dehydration'</strong>, <strong>'toxic foods'</strong>, or <strong>'newborn formula'</strong>.";
    
    for (const res of BOT_RESPONSES) {
      if (res.pattern.test(query)) {
        botText = res.reply;
        break;
      }
    }

    // Add Bot bubble
    const botBubble = document.createElement("div");
    botBubble.className = "chat-bubble bot-message";
    botBubble.innerHTML = botText;
    container.appendChild(botBubble);
    
    // Scroll down
    container.scrollTop = container.scrollHeight;
  }, 1000);
}

// --- 14. Setting Event Listeners ---
function setupEventListeners() {
  // Global theme switcher
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  // Global search triggers
  const searchClose = document.getElementById("search-close");
  const searchInput = document.getElementById("global-search-input");
  
  // Search Overlay key triggers (Esc to close)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("search-overlay").classList.remove("open");
    }
  });

  // Switch category selectors inside guide
  const petSwitcher = document.getElementById("guide-pet-switcher");
  petSwitcher.addEventListener("change", (e) => {
    loadGuideDetails(e.target.value);
  });

  // Switch category cards click in home view
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const pet = card.getAttribute("data-pet");
      loadGuideDetails(pet);
      // Trigger Route to Guides view
      document.querySelector('[data-target="guides"]').click();
    });
  });

  // Learn more link routing triggers
  document.querySelectorAll(".widget-trigger").forEach(link => {
    link.addEventListener("click", (e) => {
      const widget = link.getAttribute("data-widget");
      // Route to guides
      document.querySelector('[data-target="guides"]').click();
      
      // Select widget sub-section in Guides page
      setTimeout(() => {
        document.querySelector('[data-section="widgets"]').click();
        
        let anchorId = "widget-calc-anchor";
        if (widget === "vax") anchorId = "widget-vax-anchor";
        if (widget === "growth") anchorId = "widget-growth-anchor";
        
        const anchor = document.getElementById(anchorId);
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    });
  });

  // Inner Guide Sub-Section switcher sidebar
  document.querySelectorAll(".g-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".g-nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const sectionId = btn.getAttribute("data-section");
      document.querySelectorAll(".guide-content-block").forEach(b => b.classList.remove("active"));
      document.getElementById(`g-section-${sectionId}`).classList.add("active");
    });
  });

  // Timeline Slider Range Input
  const range = document.getElementById("timeline-range");
  range.addEventListener("input", (e) => {
    const idx = e.target.value;
    const data = PET_CARE_DATA[AppState.activePetGuide];
    updateSliderVisuals(idx, data.timeline);
  });

  // Interactive Feeding Tabs
  document.querySelectorAll(".feed-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".feed-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const pet = btn.getAttribute("data-pet");
      renderFeedingTab(pet);
    });
  });
  // Initial rendering of feeding data (defaults to dog)
  renderFeedingTab("dog");

  // Feeding safe/toxic food item searches
  document.getElementById("food-item-filter").addEventListener("input", (e) => {
    filterFoods(e.target.value);
  });

  // Feeding daily water calculator
  document.getElementById("btn-calc-water").addEventListener("click", () => {
    const val = parseFloat(document.getElementById("water-weight-input").value);
    calculateWaterNeeds(val);
  });

  // Rescue guidelines accordions
  document.querySelectorAll(".rescue-accordion-item").forEach(item => {
    item.querySelector(".rescue-header").addEventListener("click", () => {
      const active = item.classList.contains("active");
      document.querySelectorAll(".rescue-accordion-item").forEach(i => i.classList.remove("active"));
      if (!active) {
        item.classList.add("active");
      }
    });
  });

  // Vet Search Clinic filters
  const vetSearchInput = document.getElementById("vet-city-search");
  const vetStatusSelect = document.getElementById("vet-status-filter");

  const executeVetFilter = () => {
    filterVets(vetSearchInput.value, vetStatusSelect.value);
  };
  vetSearchInput.addEventListener("input", executeVetFilter);
  vetStatusSelect.addEventListener("change", executeVetFilter);

  // Adoption Hub upload file preview
  const fileInput = document.getElementById("adopt-pet-img");
  const previewBox = document.getElementById("adopt-image-preview-box");
  const previewSrc = document.getElementById("adopt-image-preview-src");
  let base64Image = "";

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        base64Image = event.target.result;
        previewSrc.src = base64Image;
        previewBox.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById("btn-remove-preview").addEventListener("click", () => {
    fileInput.value = "";
    base64Image = "";
    previewBox.classList.add("hidden");
  });

  // Post dynamic adoption form submission
  document.getElementById("adopt-post-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("adopt-pet-name").value.trim();
    const species = document.getElementById("adopt-pet-species").value;
    const age = document.getElementById("adopt-pet-age").value.trim();
    const gender = document.getElementById("adopt-pet-gender").value;
    const location = document.getElementById("adopt-pet-location").value.trim();
    const desc = document.getElementById("adopt-pet-desc").value.trim();
    const phone = document.getElementById("adopt-contact-phone").value.trim();

    // Create pet object
    const newPet = {
      id: Date.now(),
      name,
      species,
      age,
      gender,
      location,
      desc,
      phone,
      img: base64Image
    };

    AppState.adoptionListings.unshift(newPet); // Add to top
    localStorage.setItem("petcare-adoptions", JSON.stringify(AppState.adoptionListings));

    // Reset Form
    e.target.reset();
    previewBox.classList.add("hidden");
    base64Image = "";

    // Redraw list
    renderAdoptionCards(AppState.adoptionListings);
    
    showToast(`Adoption listing for ${name} successfully posted! ❤️`, "success");
    
    // Auto scroll down to list top
    document.getElementById("adoption-feed-container").scrollIntoView({ behavior: "smooth" });
  });

  // Filter pills adoption categories
  document.querySelectorAll("#adopt-filter-pills .pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#adopt-filter-pills .pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      const species = pill.getAttribute("data-species");
      filterAdoptionFeed(species);
    });
  });

  // Widget inputs click bindings

  // Age calculation
  document.getElementById("btn-calculate-age").addEventListener("click", () => {
    const spec = document.getElementById("calc-species").value;
    const val = parseFloat(document.getElementById("calc-age-val").value);
    const unit = document.getElementById("calc-age-unit").value;
    calculatePetAge(spec, val, unit);
  });

  // Load schedule in Vaccine Milestones
  document.getElementById("btn-load-vax").addEventListener("click", () => {
    const spec = document.getElementById("vax-pet-type").value;
    resetVaccineTracker(spec);
    showToast("Imunization profile loaded.", "info");
  });

  // Save Vaccine schedule
  document.getElementById("btn-save-vax").addEventListener("click", () => {
    const spec = document.getElementById("vax-pet-type").value;
    saveVaccineState(spec);
  });

  // Vaccine Notification Scheduler
  document.getElementById("btn-alert-vax").addEventListener("click", setVaccineAlertNotification);

  // Growth tracker log submissions
  document.getElementById("growth-log-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("growth-date").value;
    const weight = parseFloat(document.getElementById("growth-weight").value);
    const notes = document.getElementById("growth-notes").value.trim();

    addGrowthLog(AppState.activePetGuide, date, weight, notes);
    e.target.reset();
  });

  // Chatbot floating triggers
  const chatTrigger = document.getElementById("btn-chatbot-trigger");
  const chatWindow = document.getElementById("chatbot-window");
  
  chatTrigger.addEventListener("click", () => {
    const hidden = chatWindow.classList.contains("hidden");
    
    if (hidden) {
      chatWindow.classList.remove("hidden");
      // Swap icons
      document.querySelector(".chat-icon-open").classList.add("hidden");
      document.querySelector(".chat-icon-close").classList.remove("hidden");
      document.querySelector(".chat-pulse-alert").classList.add("hidden");
    } else {
      chatWindow.classList.add("hidden");
      // Swap icons
      document.querySelector(".chat-icon-open").classList.remove("hidden");
      document.querySelector(".chat-icon-close").classList.add("hidden");
    }
  });

  document.getElementById("btn-chat-close").addEventListener("click", () => {
    chatTrigger.click();
  });

  // Custom chip triggers for quick questions
  document.querySelectorAll(".chip-btn").forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.getAttribute("data-query");
      triggerBotReply(query);
    });
  });

  // Form chats
  document.getElementById("chat-input-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("chat-user-input");
    const query = input.value.trim();
    if (query) {
      triggerBotReply(query);
      input.value = "";
    }
  });

  // Contact Form Submission handler
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    e.target.reset();
    showToast(`Thanks, ${name}! Your inquiry has been logged successfully. We'll be in touch shortly. 🐾`, "success");
  });

  // Newsleter form handler
  document.getElementById("newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    showToast("Successfully subscribed to PetCare Guide newsletter! 📧", "success");
  });

  // Category Search input in category panel (Home view)
  const catSearchInput = document.getElementById("category-search");
  catSearchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll("#categories-grid-container .category-card").forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      const desc = card.querySelector("p").innerText.toLowerCase();
      if (title.includes(term) || desc.includes(term)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
