function pizza(doc, createText, date, sheet) {
    doc.setFont(undefined, 'bold');
			
    createText("CHEESE SLICES", "B2");
    createText("PEP. SLICES", "C2");
    createText("# of CH. PIZZAS", "D2");
    createText("# of PEP. PIZZAS", "E2");
    createText("# of Orders", "G2");
    createText("Delivery #1 @ 10:30", "A3");
    createText("10:45 LUNCH", "A4");
    createText("11:00 LUNCH", "A10");
    createText("11:35 LUNCH", "A18");
    createText("TOTAL", "A25");
    createText("Delivery #2 @ 11:50", "A27");
    createText("12:00 LUNCH", "A28");
    createText("12:43 LUNCH", "A34");
    createText("TOTAL", "A41");

    doc.setFont(undefined, 'normal');

    createText(String(date), "A1");
    createText("P3A", "A5");
    createText("P3B", "A6");
    createText("KA", "A7");
    createText("KB", "A8");
    createText("P4A (11:10)", "A11");
    createText("P4B (11:10)", "A12");
    createText("1A", "A13");
    createText("1B", "A14");
    createText("2A", "A15");
    createText("2B", "A16");
    createText("3A", "A19");
    createText("3B", "A20");
    createText("4A", "A21");
    createText("4B", "A22");
    createText("5A", "A29");
    createText("5B", "A30");
    createText("6A", "A31");
    createText("6B", "A32");
    createText("7A", "A35");
    createText("7B", "A36");
    createText("8A", "A37");
    createText("8B", "A38");
    
    // tallying
    let P3A = [
        countMatches('PreK3A', 'Cheese', ' 2 '),
        countMatches('PreK3A', 'Cheese', ' 3 '),
        countMatches('PreK3A', 'Pepperoni', ' 2 '),
        countMatches('PreK3A', 'Pepperoni', ' 3 '),
        countMatches('PreK3A'),
    ];
    createText(String(P3A[0]*2 + P3A[1]*3), 'B5');
    createText(String(P3A[2]*2 + P3A[3]*3), 'C5');
    createText(boxesAndSlices(P3A[0]*2 + P3A[1]*3), 'D5');
    createText(boxesAndSlices(P3A[2]*2 + P3A[3]*3), 'E5');
    createText(String(P3A[4]), 'G5');

    let P3B = [
        countMatches('PreK3B', 'Cheese', ' 2 '),
        countMatches('PreK3B', 'Cheese', ' 3 '),
        countMatches('PreK3B', 'Pepperoni', ' 2 '),
        countMatches('PreK3B', 'Pepperoni', ' 3 '),
        countMatches('PreK3B')
    ];
    createText(String(P3B[0]*2 + P3B[1]*3), 'B6');
    createText(String(P3B[2]*2 + P3B[3]*3), 'C6');
    createText(boxesAndSlices(P3B[0]*2 + P3B[1]*3), 'D6');
    createText(boxesAndSlices(P3B[2]*2 + P3B[3]*3), 'E6');
    createText(String(P3B[4]), 'G6');

    let KA = [
        countMatches('KA', 'Cheese', ' 2 '),
        countMatches('KA', 'Cheese', ' 3 '),
        countMatches('KA', 'Pepperoni', ' 2 '),
        countMatches('KA', 'Pepperoni', ' 3 '),
        countMatches('KA')
    ];
    createText(String(KA[0]*2 + KA[1]*3), 'B7');
    createText(String(KA[2]*2 + KA[3]*3), 'C7');
    createText(boxesAndSlices(KA[0]*2 + KA[1]*3), 'D7');
    createText(boxesAndSlices(KA[2]*2 + KA[3]*3), 'E7');
    createText(String(KA[4]), 'G7');

    let KB = [
        countMatches('KB', 'Cheese', ' 2 '),
        countMatches('KB', 'Cheese', ' 3 '),
        countMatches('KB', 'Pepperoni', ' 2 '),
        countMatches('KB', 'Pepperoni', ' 3 '),
        countMatches('KB')
    ];
    createText(String(KB[0]*2 + KB[1]*3), 'B8');
    createText(String(KB[2]*2 + KB[3]*3), 'C8');
    createText(boxesAndSlices(KB[0]*2 + KB[1]*3), 'D8');
    createText(boxesAndSlices(KB[2]*2 + KB[3]*3), 'E8');
    createText(String(KB[4]), 'G8');

    let P4A = [
        countMatches('PreK4A', 'Cheese', ' 2 '),
        countMatches('PreK4A', 'Cheese', ' 3 '),
        countMatches('PreK4A', 'Pepperoni', ' 2 '),
        countMatches('PreK4A', 'Pepperoni', ' 3 '),
        countMatches('PreK4A')
    ];
    createText(String(P4A[0]*2 + P4A[1]*3), 'B11');
    createText(String(P4A[2]*2 + P4A[3]*3), 'C11');
    createText(boxesAndSlices(P4A[0]*2 + P4A[1]*3), 'D11');
    createText(boxesAndSlices(P4A[2]*2 + P4A[3]*3), 'E11');
    createText(String(P4A[4]), 'G11');

    let P4B = [
        countMatches('PreK4B', 'Cheese', ' 2 '),
        countMatches('PreK4B', 'Cheese', ' 3 '),
        countMatches('PreK4B', 'Pepperoni', ' 2 '),
        countMatches('PreK4B', 'Pepperoni', ' 3 '),
        countMatches('PreK4B')
    ];
    createText(String(P4B[0]*2 + P4B[1]*3), 'B12');
    createText(String(P4B[2]*2 + P4B[3]*3), 'C12');
    createText(boxesAndSlices(P4B[0]*2 + P4B[1]*3), 'D12');
    createText(boxesAndSlices(P4B[2]*2 + P4B[3]*3), 'E12');
    createText(String(P4B[4]), 'G12');

    let _1A = [
        countMatches('1A', 'Cheese', ' 2 '),
        countMatches('1A', 'Cheese', ' 3 '),
        countMatches('1A', 'Pepperoni', ' 2 '),
        countMatches('1A', 'Pepperoni', ' 3 '),
        countMatches('1A')
    ];
    createText(String(_1A[0]*2 + _1A[1]*3), 'B13');
    createText(String(_1A[2]*2 + _1A[3]*3), 'C13');
    createText(boxesAndSlices(_1A[0]*2 + _1A[1]*3), 'D13');
    createText(boxesAndSlices(_1A[2]*2 + _1A[3]*3), 'E13');
    createText(String(_1A[4]), 'G13');

    let _1B = [
        countMatches('1B', 'Cheese', ' 2 '),
        countMatches('1B', 'Cheese', ' 3 '),
        countMatches('1B', 'Pepperoni', ' 2 '),
        countMatches('1B', 'Pepperoni', ' 3 '),
        countMatches('1B')
    ];
    createText(String(_1B[0]*2 + _1B[1]*3), 'B14');
    createText(String(_1B[2]*2 + _1B[3]*3), 'C14');
    createText(boxesAndSlices(_1B[0]*2 + _1B[1]*3), 'D14');
    createText(boxesAndSlices(_1B[2]*2 + _1B[3]*3), 'E14');
    createText(String(_1B[4]), 'G14');

    let _2A = [
        countMatches('2A', 'Cheese', ' 2 '),
        countMatches('2A', 'Cheese', ' 3 '),
        countMatches('2A', 'Pepperoni', ' 2 '),
        countMatches('2A', 'Pepperoni', ' 3 '),
        countMatches('2A')
    ];
    createText(String(_2A[0]*2 + _2A[1]*3), 'B15');
    createText(String(_2A[2]*2 + _2A[3]*3), 'C15');
    createText(boxesAndSlices(_2A[0]*2 + _2A[1]*3), 'D15');
    createText(boxesAndSlices(_2A[2]*2 + _2A[3]*3), 'E15');
    createText(String(_2A[4]), 'G15');

    let _2B = [
        countMatches('2B', 'Cheese', ' 2 '),
        countMatches('2B', 'Cheese', ' 3 '),
        countMatches('2B', 'Pepperoni', ' 2 '),
        countMatches('2B', 'Pepperoni', ' 3 '),
        countMatches('2B')
    ];
    createText(String(_2B[0]*2 + _2B[1]*3), 'B16');
    createText(String(_2B[2]*2 + _2B[3]*3), 'C16');
    createText(boxesAndSlices(_2B[0]*2 + _2B[1]*3), 'D16');
    createText(boxesAndSlices(_2B[2]*2 + _2B[3]*3), 'E16');
    createText(String(_2B[4]), 'G16');

    let _3A = [
        countMatches('3A', 'Cheese', ' 2 '),
        countMatches('3A', 'Cheese', ' 3 '),
        countMatches('3A', 'Pepperoni', ' 2 '),
        countMatches('3A', 'Pepperoni', ' 3 '),
        countMatches('3A')
    ];
    createText(String(_3A[0]*2 + _3A[1]*3), 'B19');
    createText(String(_3A[2]*2 + _3A[3]*3), 'C19');
    createText(boxesAndSlices(_3A[0]*2 + _3A[1]*3), 'D19');
    createText(boxesAndSlices(_3A[2]*2 + _3A[3]*3), 'E19');
    createText(String(_3A[4]), 'G19');

    let _3B = [
        countMatches('3B', 'Cheese', ' 2 '),
        countMatches('3B', 'Cheese', ' 3 '),
        countMatches('3B', 'Pepperoni', ' 2 '),
        countMatches('3B', 'Pepperoni', ' 3 '),
        countMatches('3B')
    ];
    createText(String(_3B[0]*2 + _3B[1]*3), 'B20');
    createText(String(_3B[2]*2 + _3B[3]*3), 'C20');
    createText(boxesAndSlices(_3B[0]*2 + _3B[1]*3), 'D20');
    createText(boxesAndSlices(_3B[2]*2 + _3B[3]*3), 'E20');
    createText(String(_3B[4]), 'G20');

    let _4A = [
        countMatches('4A', 'Cheese', ' 2 '),
        countMatches('4A', 'Cheese', ' 3 '),
        countMatches('4A', 'Pepperoni', ' 2 '),
        countMatches('4A', 'Pepperoni', ' 3 '),
        countMatches('4A')
    ];
    createText(String(_4A[0]*2 + _4A[1]*3), 'B21');
    createText(String(_4A[2]*2 + _4A[3]*3), 'C21');
    createText(boxesAndSlices(_4A[0]*2 + _4A[1]*3), 'D21');
    createText(boxesAndSlices(_4A[2]*2 + _4A[3]*3), 'E21');
    createText(String(_4A[4]), 'G21');

    let _4B = [
        countMatches('4B', 'Cheese', ' 2 '),
        countMatches('4B', 'Cheese', ' 3 '),
        countMatches('4B', 'Pepperoni', ' 2 '),
        countMatches('4B', 'Pepperoni', ' 3 '),
        countMatches('4B')
    ];
    createText(String(_4B[0]*2 + _4B[1]*3), 'B22');
    createText(String(_4B[2]*2 + _4B[3]*3), 'C22');
    createText(boxesAndSlices(_4B[0]*2 + _4B[1]*3), 'D22');
    createText(boxesAndSlices(_4B[2]*2 + _4B[3]*3), 'E22');
    createText(String(_4B[4]), 'G22');

    let _5A = [
        countMatches('5A', 'Cheese', ' 2 '),
        countMatches('5A', 'Cheese', ' 3 '),
        countMatches('5A', 'Pepperoni', ' 2 '),
        countMatches('5A', 'Pepperoni', ' 3 '),
        countMatches('5A')
    ];
    createText(String(_5A[0]*2 + _5A[1]*3), 'B29');
    createText(String(_5A[2]*2 + _5A[3]*3), 'C29');
    createText(boxesAndSlices(_5A[0]*2 + _5A[1]*3), 'D29');
    createText(boxesAndSlices(_5A[2]*2 + _5A[3]*3), 'E29');
    createText(String(_5A[4]), 'G29');

    let _5B = [
        countMatches('5B', 'Cheese', ' 2 '),
        countMatches('5B', 'Cheese', ' 3 '),
        countMatches('5B', 'Pepperoni', ' 2 '),
        countMatches('5B', 'Pepperoni', ' 3 '),
        countMatches('5B')
    ];
    createText(String(_5B[0]*2 + _5B[1]*3), 'B30');
    createText(String(_5B[2]*2 + _5B[3]*3), 'C30');
    createText(boxesAndSlices(_5B[0]*2 + _5B[1]*3), 'D30');
    createText(boxesAndSlices(_5B[2]*2 + _5B[3]*3), 'E30');
    createText(String(_5B[4]), 'G30');

    let _6A = [
        countMatches('6A', 'Cheese', ' 2 '),
        countMatches('6A', 'Cheese', ' 3 '),
        countMatches('6A', 'Pepperoni', ' 2 '),
        countMatches('6A', 'Pepperoni', ' 3 '),
        countMatches('6A')
    ];
    createText(String(_6A[0]*2 + _6A[1]*3), 'B31');
    createText(String(_6A[2]*2 + _6A[3]*3), 'C31');
    createText(boxesAndSlices(_6A[0]*2 + _6A[1]*3), 'D31');
    createText(boxesAndSlices(_6A[2]*2 + _6A[3]*3), 'E31');
    createText(String(_6A[4]), 'G31');

    let _6B = [
        countMatches('6B', 'Cheese', ' 2 '),
        countMatches('6B', 'Cheese', ' 3 '),
        countMatches('6B', 'Pepperoni', ' 2 '),
        countMatches('6B', 'Pepperoni', ' 3 '),
        countMatches('6B')
    ];
    createText(String(_6B[0]*2 + _6B[1]*3), 'B32');
    createText(String(_6B[2]*2 + _6B[3]*3), 'C32');
    createText(boxesAndSlices(_6B[0]*2 + _6B[1]*3), 'D32');
    createText(boxesAndSlices(_6B[2]*2 + _6B[3]*3), 'E32');
    createText(String(_6B[4]), 'G32');

    let _7A = [
        countMatches('7A', 'Cheese', ' 2 '),
        countMatches('7A', 'Cheese', ' 3 '),
        countMatches('7A', 'Pepperoni', ' 2 '),
        countMatches('7A', 'Pepperoni', ' 3 '),
        countMatches('7A')
    ];
    createText(String(_7A[0]*2 + _7A[1]*3), 'B35');
    createText(String(_7A[2]*2 + _7A[3]*3), 'C35');
    createText(boxesAndSlices(_7A[0]*2 + _7A[1]*3), 'D35');
    createText(boxesAndSlices(_7A[2]*2 + _7A[3]*3), 'E35');
    createText(String(_7A[4]), 'G35');

    let _7B = [
        countMatches('7B', 'Cheese', ' 2 '),
        countMatches('7B', 'Cheese', ' 3 '),
        countMatches('7B', 'Pepperoni', ' 2 '),
        countMatches('7B', 'Pepperoni', ' 3 '),
        countMatches('7B')
    ];
    createText(String(_7B[0]*2 + _7B[1]*3), 'B36');
    createText(String(_7B[2]*2 + _7B[3]*3), 'C36');
    createText(boxesAndSlices(_7B[0]*2 + _7B[1]*3), 'D36');
    createText(boxesAndSlices(_7B[2]*2 + _7B[3]*3), 'E36');
    createText(String(_7B[4]), 'G36');

    let _8A = [
        countMatches('8A', 'Cheese', ' 2 '),
        countMatches('8A', 'Cheese', ' 3 '),
        countMatches('8A', 'Pepperoni', ' 2 '),
        countMatches('8A', 'Pepperoni', ' 3 '),
        countMatches('8A')
    ];
    createText(String(_8A[0]*2 + _8A[1]*3), 'B37');
    createText(String(_8A[2]*2 + _8A[3]*3), 'C37');
    createText(boxesAndSlices(_8A[0]*2 + _8A[1]*3), 'D37');
    createText(boxesAndSlices(_8A[2]*2 + _8A[3]*3), 'E37');
    createText(String(_8A[4]), 'G37');

    let _8B = [
        countMatches('8B', 'Cheese', ' 2 '),
        countMatches('8B', 'Cheese', ' 3 '),
        countMatches('8B', 'Pepperoni', ' 2 '),
        countMatches('8B', 'Pepperoni', ' 3 '),
        countMatches('8B')
    ];
    createText(String(_8B[0]*2 + _8B[1]*3), 'B38');
    createText(String(_8B[2]*2 + _8B[3]*3), 'C38');
    createText(boxesAndSlices(_8B[0]*2 + _8B[1]*3), 'D38');
    createText(boxesAndSlices(_8B[2]*2 + _8B[3]*3), 'E38');
    createText(String(_8B[4]), 'G38');

}