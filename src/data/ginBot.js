// GinBot knowledge base — offline rule-based gin assistant

export const botPersonality = {
  name: 'GinBot',
  greeting: "Hello! I'm GinBot, your gin guide. Ask me anything about gins, botanicals, serving tips, food pairings, or help choosing the right bottle.",
  fallback: "I don't have a specific answer for that, but I'm happy to help with gin styles, botanicals, serving tips, food pairings, or recommendations. Try asking something like: 'What gin is good for a first date?' or 'What botanicals are in Hendrick's?'",
}

// Suggested prompts shown in the chat UI
export const suggestedPrompts = [
  "What gin should I try first?",
  "Best gin for a G&T?",
  "What are fynbos botanicals?",
  "Gin on a budget?",
  "What food pairs with gin?",
  "Difference between London Dry and New Western?",
  "How do I serve gin properly?",
  "What mixer should I use?",
  "Best South African gin?",
  "What makes a good first-date gin?",
  "How do I taste gin?",
  "How is gin made?",
  "Where did gin come from?",
  "How do I choose a tonic?",
  "Why does my G&T taste bitter?",
  "What is a zero-proof gin serve?",
]

// Each rule: array of trigger keywords/phrases + a response string
// The matcher checks if the user message contains ANY trigger (case-insensitive)
export const botRules = [
  // --- Greetings ---
  {
    triggers: ['hello', 'hi', 'hey', 'howdy', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! I'm GinBot — your personal gin expert. Ask me anything: gin recommendations, botanicals, food pairings, how to serve, or the best budget bottle. What can I help you with today?",
  },

  // --- First gin / beginner ---
  {
    triggers: ['first gin', 'beginner', 'new to gin', 'start with', 'starting out', 'never had gin', 'never tried gin', 'get into gin'],
    response: "Starting your gin journey? Great choice. For beginners I recommend:\n\n• **Hendrick's** — cucumber and rose notes, very approachable, light on juniper\n• **Tanqueray No. TEN** — fresh and citrus-led, easy to enjoy\n• **Emini Gin (South Africa)** — zesty and affordable, perfect intro to African botanicals\n\nServe any of these in a balloon glass with premium tonic and a lemon or cucumber garnish. Don't rush it — gin rewards slow sipping.",
  },

  // --- London Dry ---
  {
    triggers: ['london dry', 'what is london dry', 'classic gin', 'traditional gin'],
    response: "**London Dry Gin** is the benchmark style. Key facts:\n\n• All botanicals are added during distillation — no artificial flavours after\n• Must be at least 37.5% ABV\n• Dominated by juniper — that classic piney, resinous bite\n• Great examples: Beefeater, Tanqueray, Sipsmith, Gordon's\n\nLondon Dry is the style that defines 'gin' for most people. It's dry, bold, and brilliant in a Negroni or Martini.",
  },

  // --- New Western / Contemporary ---
  {
    triggers: ['new western', 'contemporary gin', 'modern gin', 'american style gin', 'non-juniper'],
    response: "**New Western (Contemporary) Gin** breaks from tradition:\n\n• Juniper is present but not the lead botanical\n• Distillers highlight local, unusual, or seasonal ingredients\n• Styles range from floral and citrus-forward to spiced and vegetal\n• Examples: Hendrick's, Aviation, St. George Terroir, Monkey 47\n\nThese gins are ideal if you find classic London Dry too piney.",
  },

  // --- G&T ---
  {
    triggers: ['g&t', 'gin and tonic', 'gin tonic', 'tonic water', 'best tonic'],
    response: "The perfect G&T comes down to ratio and quality:\n\n• **Ratio**: 50 ml gin to 150 ml tonic (1:3) is the classic start. Adjust to taste.\n• **Tonic**: Use a premium tonic — Fever-Tree, 1724, Franklin & Sons, or Fentimans. The tonic is half the drink.\n• **Ice**: Loads of it. Large, clear cubes melt slowly and keep dilution low.\n• **Glass**: A balloon (copa de balon) glass concentrates aroma beautifully.\n• **Garnish**: Match the garnish to the gin's lead botanical — cucumber for floral, citrus for dry, rosemary for herbal.\n\nPour the gin first, then ice, then gently pour the tonic down the side of the glass. Stir once.",
  },

  // --- Martini ---
  {
    triggers: ['martini', 'gin martini', 'dirty martini'],
    response: "A classic Gin Martini is pure elegance:\n\n• **Classic recipe**: 60 ml London Dry gin + 10 ml dry vermouth + ice. Stir for 30 seconds. Strain into chilled coupe or martini glass.\n• **Garnish**: Lemon twist or green olive — pick one, not both.\n• **Dirty**: Add 10–15 ml olive brine for a savoury twist.\n• **Best gins for a Martini**: Beefeater, Sipsmith, Tanqueray, Hayman's — bold juniper-forward gins hold their own against vermouth.\n\nThe ratio of gin to vermouth is personal. Winston Churchill's method was to glance at the vermouth bottle — but 6:1 is a good starting point.",
  },

  // --- Negroni ---
  {
    triggers: ['negroni', 'campari', 'vermouth', 'classic cocktail'],
    response: "The **Negroni** is one of the greatest cocktails ever made:\n\n• **Recipe**: Equal parts (25 ml each) gin + Campari + sweet vermouth. Stir with ice. Strain over a large ice cube. Orange peel garnish.\n• **Best gins**: Bold London Dry works best — Beefeater, Tanqueray, Whitley Neill. The gin needs to hold up against Campari's bitterness.\n• **Variations**: Try a White Negroni (Lillet Blanc instead of vermouth) or a Negroni Sbagliato (prosecco instead of gin for something lighter).\n\nThe Negroni rewards patience — stir for at least 20 seconds.",
  },

  // --- South Africa gins ---
  {
    triggers: ['south african gin', 'south africa gin', 'african gin', 'sa gin', 'local gin', 'cape gin', 'fynbos gin', 'inverroche', 'hope on hopkins', 'pienaar', 'six dogs', 'wilderer'],
    response: "South Africa has an extraordinary gin scene:\n\n• **Inverroche** (Still Bay) — three styles (Classic, Verdant, Amber) each showcasing different fynbos botanicals. The benchmark SA gin.\n• **Hope on Hopkins** (Cape Town) — buchu and lemon peel forward, crisp and herbaceous.\n• **Wilderer Fynbos Gin** (Paarl) — earthy, floral, beautifully complex.\n• **Pienaar & Son** (Cape Town) — citrus-forward small batch, great with grapefruit tonic.\n• **Six Dogs Blue** (Karoo) — colour-changing, butterfly pea flower forward, a visual showstopper.\n• **Emini Gin** — fresh, zesty, exceptional value.\n\nThe Cape Floral Kingdom gives SA gins a flavour you simply can't find anywhere else in the world.",
  },

  // --- UK gins ---
  {
    triggers: ['european gin', 'europe gin', 'uk gin', 'british gin', 'english gin', 'scottish gin', 'irish gin', 'spanish gin', 'italian gin', 'german gin', 'dutch gin', 'hendricks', "hendrick's", 'beefeater', 'sipsmith', 'tanqueray', 'gordons', 'bombay sapphire', 'monkey 47', 'gin mare', 'malfy', 'roku'],
    response: "Europe is one of gin's richest regions, from London Dry benchmarks to Mediterranean, Alpine, and Nordic styles:\n\n• **Beefeater** and **Sipsmith** (England) — juniper-led classics with different levels of polish and citrus.\n• **Hendrick's** (Scotland) — cucumber and rose infused, unusual and approachable.\n• **Monkey 47** (Germany) — intensely layered with Black Forest botanicals.\n• **Gin Mare** (Spain) — savoury Mediterranean botanicals including olive, rosemary, and thyme.\n• **Malfy** (Italy) — bright Italian citrus, ideal for sunny aperitivo serves.\n• **Bols Genever** (Netherlands) — a maltier historic style that shows gin's roots.\n• **Hernö** (Sweden) — soft floral and berry notes with a clean Nordic finish.\n\nEuropean gin is not one style — choose classic juniper, savoury Mediterranean, or floral and foraged depending on your palate.",
  },

  // --- Asian gins ---
  {
    triggers: ['asian gin', 'asia gin', 'japanese gin', 'japan gin', 'indian gin', 'india gin', 'roku', 'ki no bi', 'hapusa', 'southeast asian'],
    response: "Asian gin makers often build around tea, citrus, spice, and regional botanicals:\n\n• **Roku** (Japan) — yuzu, sencha tea, sakura, and sansho pepper. Silky and precise.\n• **KI NO BI** (Kyoto) — yuzu, hinoki, sansho, and gyokuro tea in a structured dry style.\n• **Hapusa** (India) — Himalayan juniper, mango, turmeric, and gondhoraj lime. Earthy and distinctive.\n• **Greater Than** (India) — a clean, affordable dry gin with tea and spice lift.\n\nTry Asian gins with yuzu, calamansi, ginger, soda, or a light tonic so the regional botanicals stay clear.",
  },

  // --- USA gins ---
  {
    triggers: ['american gin', 'usa gin', 'us gin', 'aviation gin', "st george", 'death', 'bluecoat', "barr hill", 'brooklyn gin', 'few gin'],
    response: "American gins are some of the most innovative in the world:\n\n• **St. George Terroir Gin** (California) — Douglas fir, California bay laurel, coastal sage. A forest in a glass.\n• **Aviation American Gin** (Oregon) — smooth, lavender-forward, low juniper. Great gateway gin.\n• **Barr Hill Gin** (Vermont) — raw honey infusion, floral and unique. Perfect in a Bee's Knees cocktail.\n• **Death's Door Gin** (Wisconsin) — minimalist: juniper, coriander, fennel. Clean and pure.\n• **Bluecoat American Dry** (Philadelphia) — bold citrus, organic botanicals, accessible price point.\n• **Brooklyn Gin** (New York) — fresh citrus peel, hand-crafted, city sophistication.\n\nAmerican gin embraces terroir — the best bottles taste like the place they came from.",
  },

  // --- Americas / Mexico / South America gins ---
  {
    triggers: ['mexican gin', 'latin gin', 'south american gin', 'agave gin', 'peru gin', 'brazil gin', 'amazonia', 'andean'],
    response: "Latin American gins are exciting and still under-explored:\n\n• **Agave Garden Gin** (Mexico) — agave-forward with citrus and wild herbs. Mezcal influence is subtle but present.\n• **Desert Citrus Gin** (Mexico) — prickly pear, lime, and desert botanicals. Vivid and warming.\n• **Amazonia Dry Gin** (Brazil) — açaí, cupuaçu, and tropical botanicals. Lush and distinctive.\n• **Andean Herb Gin** (South America) — quinoa-based spirit with high-altitude botanicals. Complex and earthy.\n\nThese gins pair brilliantly with chilli salt rims, lime, and fresh jalapeño garnishes.",
  },

  // --- Botanicals ---
  {
    triggers: ['botanical', 'botanicals', 'ingredients', 'what is in gin', 'juniper', 'fynbos', 'buchu', 'rooibos', 'angelica'],
    response: "Botanicals are what make gin, gin. Here are the key ones to know:\n\n**Must-Have**\n• **Juniper berries** — mandatory in all gin, gives that distinctive pine and resin character\n• **Coriander seed** — citrusy, spicy, almost the 'bass note' of most gins\n• **Angelica root** — earthy, dry, acts as a fixative that binds other flavours\n\n**South African Specials**\n• **Buchu** — blackcurrant depth, uniquely South African\n• **Rooibos** — earthy sweetness, adds soft warmth\n• **Fynbos** — broad term for Cape flora; each distillery picks different plants\n\n**UK & European**\n• **Elderflower** — light, floral, slightly honeyed\n• **Orris root** — violet-like, powdery, a classic component\n• **Sloe berry** — tart, plummy, used in sloe gin\n\nA gin's botanical bill is its fingerprint — no two are exactly alike.",
  },

  // --- Food pairing ---
  {
    triggers: ['food', 'food pairing', 'food with gin', 'what to eat', 'snack', 'snacks with gin', 'pairing'],
    response: "Gin and food are natural partners:\n\n• **Citrus gins** — ceviche, grilled prawns, feta and olives, salted almonds\n• **Floral and herbal gins** — goat cheese, grilled halloumi, rosemary flatbread, fresh herbs\n• **Spiced and bold gins** — tacos, chilli prawns, guacamole, smoky salsa\n• **Fruit-forward gins** — brie, fresh berries, shortbread, honey, charcuterie\n\n**Golden rule**: the food shouldn't compete with the gin. Keep strong chilli and heavy smoked items in small portions. The gin should remain the star.",
  },

  // --- Serving / glassware ---
  {
    triggers: ['how to serve', 'serving', 'glassware', 'glass', 'copa', 'balloon glass', 'highball', 'garnish'],
    response: "Serving gin well makes a real difference:\n\n**Glassware**\n• **Copa de Balon** — best for aromatic, floral gins. Wide rim traps botanicals.\n• **Highball** — for long coolers and tall G&Ts\n• **Coupe or Martini glass** — for stirred cocktails served up\n\n**Ice**\n• More is more. Large, clear cubes melt slowly.\n• Pre-chill your glass with ice water while you prepare the drink.\n\n**Garnish rules**\n• Match the garnish to the gin's lead botanical\n• Citrus gins: citrus peel or wedge\n• Floral gins: cucumber or edible flowers\n• Herbal gins: rosemary, thyme, or sage\n\n**The pour**: gin first, then ice, then tonic poured gently down the side. Stir once, garnish, serve immediately.",
  },

  // --- Budget gin ---
  {
    triggers: ['budget', 'cheap gin', 'affordable gin', 'value gin', 'best value', 'wallet', 'inexpensive'],
    response: "Great gin doesn't have to break the bank:\n\n**South Africa**\n• Emini Gin — fresh, zesty, exceptional value\n• Nottingham Road Gin — reliable classic dry style\n• Six Dogs Blue — colour-changing, fun, affordable\n\n**UK**\n• Beefeater London Dry — iconic, versatile, widely available\n• Hayman's London Dry — family-owned, clean and honest\n• Gordon's — the most-sold gin in the world for a reason\n\n**USA**\n• Bluecoat American Dry — citrus-forward, good price\n• Death's Door — minimalist, pure, affordable\n\n**Tip**: Budget gin shines brightest in a well-made G&T with quality tonic. The tonic does a lot of work.",
  },

  // --- First date gin ---
  {
    triggers: ['first date', 'date night', 'impress', 'romantic', 'date gin'],
    response: "Gin for a first date — this is important:\n\n**Safe, sophisticated choice**: Hendrick's — the quirky bottle opens conversation, the cucumber profile is approachable even for non-gin drinkers.\n\n**Confident, knowledgeable choice**: St. George Terroir or any local craft gin — shows adventurous taste and genuine curiosity.\n\n**Budget-smart move**: Emini Gin or Bluecoat — thoughtful and good quality without overspending.\n\n**The real rule**: Choose something *you* genuinely enjoy and can talk about with passion. Confidence in your choice is more impressive than the bottle itself.\n\nOrder it properly — balloon glass, loads of ice, quality tonic, matching garnish. Attention to detail is attractive.",
  },

  // --- Spirit coolers ---
  {
    triggers: ['spirit cooler', 'spirit coolers', 'gin cooler', 'long drink', 'summer drink', 'light drink'],
    response: "Gin spirit coolers are perfect for relaxed, easy-drinking sessions:\n\n• **Gin & Elderflower Cooler**: 50 ml gin + elderflower cordial + cucumber + soda water + ice\n• **Gin & Hibiscus**: 50 ml gin + hibiscus syrup + lime + soda + dried hibiscus garnish\n• **Jungle Bird Gin Riff**: 45 ml gin + 20 ml Campari + pineapple juice + lime + soda\n• **Mint & Citrus Cooler**: 50 ml gin + fresh mint + lime + soda + cucumber rounds\n\n**Key principle**: Keep it light, cold, and well-garnished. Spirit coolers are social drinks — build them in a large glass with plenty of ice.",
  },

  // --- Quick fixes ---
  {
    triggers: ['quick fix', 'no tonic', 'no ice', 'no citrus', 'no shaker', 'substitute', 'improvise', 'fix'],
    response: "Quick gin fixes — no specialist kit? No problem:\n\n• **No tonic**: Chilled soda water + squeeze of lemon/lime + small spoon of honey\n• **No fresh citrus**: Clear apple juice or a teaspoon of diluted vinegar for brightness\n• **No simple syrup**: Dissolve sugar or honey in warm water (1:1). Jam works too.\n• **No shaker**: Use a clean jar with a secure lid. Shake briefly, strain through a kitchen sieve.\n• **Not enough ice**: Chill gin, mixer, and glass in advance. Pour slowly.\n• **Too strong**: Add soda water 25 ml at a time, taste between each addition.\n\n**Home bar rule**: Gin + cold + citrus + fizz = a good drink. Everything else is refinement.",
  },

  // --- Gin styles overview ---
  {
    triggers: ['types of gin', 'gin styles', 'styles of gin', 'different gins', 'categories of gin', 'gin categories'],
    response: "The main gin styles to know:\n\n• **London Dry** — juniper-forward, dry, no post-distillation additives. The classic benchmark.\n• **Plymouth Gin** — slightly earthier and fuller than London Dry. Protected designation (only made in Plymouth).\n• **Old Tom** — slightly sweeter, bridges the gap between London Dry and genever. Great in classic cocktails.\n• **Sloe Gin** — London Dry steeped with sloe berries and sugar. Fruit-forward liqueur style.\n• **Navy Strength** — bottled at 57% ABV or above. Intense, bold, designed for tropical climates.\n• **New Western / Contemporary** — juniper in the background, local botanicals take the lead.\n• **Genever** — Dutch origin, malt wine base, more whisky-like. The ancestor of modern gin.\n\nWhich style interests you most?",
  },

  // --- ABV / strength ---
  {
    triggers: ['abv', 'alcohol', 'strength', 'how strong', 'percentage', 'navy strength', '57%'],
    response: "Gin strength — what to know:\n\n• **Standard gin**: 37.5%–47% ABV — most everyday bottles fall here\n• **London Dry minimum**: 37.5% ABV by regulation\n• **Navy Strength**: 57%+ ABV — historically bottled at this strength so gunpowder would still ignite if gin was spilled on it (true story)\n• **Cask-aged gin**: often 46–50% ABV\n\n**Higher ABV gins** hold their character better in ice-heavy drinks. A 47% gin will show more botanical complexity in a long G&T than a 37.5% one.\n\nFor cocktails, navy strength is brilliant — you need less volume to get the same flavour impact.",
  },

  // --- Cocktails ---
  {
    triggers: ['cocktail', 'cocktails', 'gin cocktail', 'what can i make', 'recipe', 'drink recipe'],
    response: "Classic gin cocktails worth mastering:\n\n• **G&T** — 50 ml gin + 150 ml tonic + ice + garnish. The foundation.\n• **Martini** — 60 ml gin + 10 ml dry vermouth + ice. Stir, strain, lemon twist.\n• **Negroni** — equal parts gin + Campari + sweet vermouth. Stir, strain, orange peel.\n• **Tom Collins** — 50 ml gin + 25 ml lemon juice + 15 ml sugar syrup + soda. Built over ice.\n• **Bee's Knees** — 50 ml gin + 25 ml lemon juice + 20 ml honey syrup. Shaken, served up.\n• **Gimlet** — 60 ml gin + 20 ml fresh lime juice + 10 ml sugar syrup. Clean and sharp.\n• **Clover Club** — gin + lemon + raspberry syrup + egg white. Shaken hard.\n\nStart with the G&T, master the Martini, then work your way through the classics.",
  },

  // --- Storage ---
  {
    triggers: ['store gin', 'storing gin', 'keep gin', 'how long', 'shelf life', 'expire', 'fridge'],
    response: "Gin storage is straightforward:\n\n• **Unopened**: Gin keeps indefinitely in a cool, dark place. Alcohol is its own preservative.\n• **Opened**: Consume within 12–18 months for best flavour. The botanicals will gradually fade after opening.\n• **Fridge**: Not necessary, but a cold gin does make a better G&T — less ice needed, less dilution.\n• **Sunlight**: The biggest enemy. UV light degrades botanicals and colour. Keep bottles out of direct sunlight.\n• **Upright**: Always store upright. Unlike wine, gin doesn't improve with time in the bottle once opened.\n\nA half-empty bottle loses flavour faster due to more air contact. Either finish it or transfer to a smaller bottle.",
  },

  // --- Gin vs Vodka ---
  {
    triggers: ['gin vs vodka', 'vodka', 'difference between gin and vodka', 'what makes gin different'],
    response: "Gin vs Vodka — the key distinction:\n\n• **Vodka** is a neutral spirit. By definition it should be odourless, colourless, and tasteless.\n• **Gin** is a flavoured spirit. It starts as a neutral spirit but is re-distilled with botanicals — juniper being mandatory.\n\nIn essence: if vodka is a blank canvas, gin is the painting.\n\nBoth start from the same base (grain or potato spirit), but gin's botanical bill gives it enormous flavour complexity. This is why gin cocktails can be so varied — the botanicals interact differently with each mixer.",
  },

  // --- Tonic pairing ---
  {
    triggers: ['choose a tonic', 'tonic pairing', 'which tonic', 'tonic pair', 'mixer pairing'],
    response: "Choose a tonic that supports the gin rather than hiding it:\n\n• **Dry, juniper-led gin** — Indian or dry tonic with lemon peel\n• **Citrus-led gin** — Mediterranean tonic with grapefruit or orange\n• **Floral gin** — light tonic with cucumber or a small mint sprig\n• **Herbal or savoury gin** — dry tonic, soda, or a gentle ginger mixer\n\nStart at **1 part gin to 2–3 parts tonic**, then adjust. If the drink tastes too sweet, switch to a dry tonic before adding more garnish. Keep tonic cold and pour it gently to preserve the bubbles.",
  },

  // --- Tasting ---
  {
    triggers: ['taste gin', 'tasting gin', 'how to taste', 'taste a gin', 'gin tasting'],
    response: "Use a simple three-step tasting ritual:\n\n1. **Look** — check the clarity and colour. A clear gin is the usual starting point; colour may come from botanicals or ageing.\n2. **Smell** — swirl gently, then nose the glass from a little distance. Look for juniper, citrus, floral, spice, or earthy notes.\n3. **Sip** — taste a small amount neat, then add a few drops of water or try it with tonic. Notice what changes.\n\nWrite down the first three aromas that come to mind. There is no wrong answer, and comparing two gins side by side is more useful than trying to remember a flavour on its own.",
  },

  // --- Production ---
  {
    triggers: ['how gin is made', 'how is gin made', 'make gin', 'gin production', 'distill gin', 'distilling gin'],
    response: "Most gin follows this path:\n\n• A neutral spirit is made from a base such as grain, grape, or molasses.\n• Juniper and other botanicals are steeped in the spirit, suspended in the vapour path, or added in a combination of both methods.\n• The spirit is distilled so the botanical aromas become part of the final liquid.\n• The distiller reduces it to bottling strength with water, then lets the gin rest before release.\n\nThe recipe, extraction method, distillation cuts, water, and bottling strength all affect the result. Gin does not need barrel ageing to be complete; its character usually comes from the botanical balance.",
  },

  // --- History ---
  {
    triggers: ['history of gin', 'where gin came from', 'origin of gin', 'gin history', 'who invented gin', 'genever'],
    response: "Gin grew from **genever**, a juniper-flavoured spirit made in the Low Countries. English soldiers encountered it in the late 16th century and brought the taste home.\n\nEngland's gin boom followed in the 18th century, and later distillers developed the cleaner, drier style now known as London Dry. Today, distillers across Africa, Europe, the Americas, and beyond use local botanicals to create new expressions while keeping juniper at the centre.",
  },

  // --- Troubleshooting ---
  {
    triggers: ['bitter g&t', 'bitter gin and tonic', 'too bitter', 'too sweet', 'too strong', 'watery g&t', 'watery gin and tonic'],
    response: "A quick G&T diagnosis:\n\n• **Too bitter** — use a less bitter or lighter tonic, add a little soda, and keep the garnish simple.\n• **Too sweet** — switch to a dry tonic and avoid sweet cordials or fruit-heavy garnishes.\n• **Too strong** — add tonic 25 ml at a time and taste after each addition.\n• **Watery** — use fresh, large ice, chill the ingredients first, and stir only once.\n• **Flat** — open a fresh tonic and pour it gently down the side of the glass.\n\nChange one thing at a time so you learn what suits the gin.",
  },

  // --- Zero-proof ---
  {
    triggers: ['zero proof', 'zero-proof', 'non alcoholic gin', 'non-alcoholic gin', 'no alcohol gin', 'alcohol free gin'],
    response: "A zero-proof serve can still have the structure of a G&T:\n\n• Use a chilled non-alcoholic botanical spirit or a juniper-forward tea.\n• Add 100–150 ml of dry tonic over plenty of ice.\n• Finish with a lemon peel, cucumber ribbon, or a few fresh herbs.\n\nCheck the bottle label: some products called non-alcoholic contain trace alcohol. If you are avoiding alcohol completely, choose a clearly labelled 0.0% product and remember that tonic itself can contain sugar or quinine.",
  },

  // --- Thank you ---
  {
    triggers: ['thank', 'thanks', 'cheers', 'perfect', 'helpful', 'great', 'awesome', 'brilliant'],
    response: "Cheers! Always happy to talk gin. Is there anything else you'd like to know — a specific bottle, a cocktail recipe, food pairing, or serving tip?",
  },
]
