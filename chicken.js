function chicken(doc, createText, date, sheet) {
    doc.setFont(undefined, 'bold');
			
    createText("2 Chickens", "D2");
    createText("3 Chickens", "E2");
    createText("4 Chickens", "F2");
    createText("# of Orders", "G2");
    createText("Delivery #1 @ 10:35", "A3");
    createText("10:45 LUNCH", "A4");
    createText("11:25 LUNCH", "A14");
    createText("TOTAL", "A27");
    createText("Delivery #2 @ 11:50", "A29");
    createText("12:00 LUNCH", "A30");
    createText("12:43 LUNCH", "A36");
    createText("TOTAL", "A47");

    doc.setFont(undefined, 'normal');

    createText(String(date), "A1");
    createText("P3A", "A5");
    createText("P3B", "A6");
    createText("KA", "A7");
    createText("KB", "A8");
    createText("1A", "A9");
    createText("1B", "A10");
    createText("2A", "A11");
    createText("2B", "A12");
    createText("P4A (11:10)", "A15");
    createText("P4B (11:10)", "A16");
    createText("3A", "A17");
    createText("3B", "A18");
    createText("4A", "A19");
    createText("4B", "A20");
    createText("ADD EXTRA", "A21");
    createText("10", "B21");
    createText("5A", "A31");
    createText("5B", "A32");
    createText("6A", "A33");
    createText("6B", "A34");
    createText("7A", "A37");
    createText("7B", "A38");
    createText("8A", "A39");
    createText("8B", "A40");
    createText("ADD EXTRA", "A42");
    createText("10", "B42");
    
    // tallying
    let P3A = [
        countMatches('PreK3A', '2*'),
        countMatches('PreK3A', '3*'),
        countMatches('PreK3A', '4*')
    ];
    createText(String(P3A[0]*2 + P3A[1]*3 + P3A[2]*4), 'B5');
    createText(String(P3A[0]), 'D5');
    createText(String(P3A[1]), 'E5');
    createText(String(P3A[2]), 'F5');
    createText(String(P3A[0] + P3A[1] + P3A[2]), 'G5');

    let P3B = [
        countMatches('PreK3B', '2*'),
        countMatches('PreK3B', '3*'),
        countMatches('PreK3B', '4*')
    ];
    createText(String(P3B[0]*2 + P3B[1]*3 + P3B[2]*4), 'B6');
    createText(String(P3B[0]), 'D6');
    createText(String(P3B[1]), 'E6');
    createText(String(P3B[2]), 'F6');
    createText(String(P3B[0] + P3B[1] + P3B[2]), 'G6');

    let KA = [
        countMatches('KA', '2*'),
        countMatches('KA', '3*'),
        countMatches('KA', '4*')
    ];
    createText(String(KA[0]*2 + KA[1]*3 + KA[2]*4), 'B7');
    createText(String(KA[0]), 'D7');
    createText(String(KA[1]), 'E7');
    createText(String(KA[2]), 'F7');
    createText(String(KA[0] + KA[1] + KA[2]), 'G7');

    let KB = [
        countMatches('KB', '2*'),
        countMatches('KB', '3*'),
        countMatches('KB', '4*')
    ];
    createText(String(KB[0]*2 + KB[1]*3 + KB[2]*4), 'B8');
    createText(String(KB[0]), 'D8');
    createText(String(KB[1]), 'E8');
    createText(String(KB[2]), 'F8');
    createText(String(KB[0] + KB[1] + KB[2]), 'G8');

    let _1A = [
        countMatches('1A', '2*'),
        countMatches('1A', '3*'),
        countMatches('1A', '4*')
    ];
    createText(String(_1A[0]*2 + _1A[1]*3 + _1A[2]*4), 'B9');
    createText(String(_1A[0]), 'D9');
    createText(String(_1A[1]), 'E9');
    createText(String(_1A[2]), 'F9');
    createText(String(_1A[0] + _1A[1] + _1A[2]), 'G9');

    let _1B = [
        countMatches('1B', '2*'),
        countMatches('1B', '3*'),
        countMatches('1B', '4*')
    ];
    createText(String(_1B[0]*2 + _1B[1]*3 + _1B[2]*4), 'B10');
    createText(String(_1B[0]), 'D10');
    createText(String(_1B[1]), 'E10');
    createText(String(_1B[2]), 'F10');
    createText(String(_1B[0] + _1B[1] + _1B[2]), 'G10');

    let _2A = [
        countMatches('2A', '2*'),
        countMatches('2A', '3*'),
        countMatches('2A', '4*')
    ];
    createText(String(_2A[0]*2 + _2A[1]*3 + _2A[2]*4), 'B11');
    createText(String(_2A[0]), 'D11');
    createText(String(_2A[1]), 'E11');
    createText(String(_2A[2]), 'F11');
    createText(String(_2A[0] + _2A[1] + _2A[2]), 'G11');

    let _2B = [
        countMatches('2B', '2*'),
        countMatches('2B', '3*'),
        countMatches('2B', '4*')
    ];
    createText(String(_2B[0]*2 + _2B[1]*3 + _2B[2]*4), 'B12');
    createText(String(_2B[0]), 'D12');
    createText(String(_2B[1]), 'E12');
    createText(String(_2B[2]), 'F12');
    createText(String(_2B[0] + _2B[1] + _2B[2]), 'G12');

    let P4A = [
        countMatches('PreK4A', '2*'),
        countMatches('PreK4A', '3*'),
        countMatches('PreK4A', '4*')
    ];
    createText(String(P4A[0]*2 + P4A[1]*3 + P4A[2]*4), 'B15');
    createText(String(P4A[0]), 'D15');
    createText(String(P4A[1]), 'E15');
    createText(String(P4A[2]), 'F15');
    createText(String(P4A[0] + P4A[1] + P4A[2]), 'G15');

    let P4B = [
        countMatches('PreK4B', '2*'),
        countMatches('PreK4B', '3*'),
        countMatches('PreK4B', '4*')
    ];
    createText(String(P4B[0]*2 + P4B[1]*3 + P4B[2]*4), 'B16');
    createText(String(P4B[0]), 'D16');
    createText(String(P4B[1]), 'E16');
    createText(String(P4B[2]), 'F16');
    createText(String(P4B[0] + P4B[1] + P4B[2]), 'G16');

    let _3A = [
        countMatches(' 3A', '2*'),
        countMatches(' 3A', '3*'),
        countMatches(' 3A', '4*')
    ];
    createText(String(_3A[0]*2 + _3A[1]*3 + _3A[2]*4), 'B17');
    createText(String(_3A[0]), 'D17');
    createText(String(_3A[1]), 'E17');
    createText(String(_3A[2]), 'F17');
    createText(String(_3A[0] + _3A[1] + _3A[2]), 'G17');

    let _3B = [
        countMatches(' 3B', '2*'),
        countMatches(' 3B', '3*'),
        countMatches(' 3B', '4*')
    ];
    createText(String(_3B[0]*2 + _3B[1]*3 + _3B[2]*4), 'B18');
    createText(String(_3B[0]), 'D18');
    createText(String(_3B[1]), 'E18');
    createText(String(_3B[2]), 'F18');
    createText(String(_3B[0] + _3B[1] + _3B[2]), 'G18');

    let _4A = [
        countMatches(' 4A', '2*'),
        countMatches(' 4A', '3*'),
        countMatches(' 4A', '4*')
    ];
    createText(String(_4A[0]*2 + _4A[1]*3 + _4A[2]*4), 'B19');
    createText(String(_4A[0]), 'D19');
    createText(String(_4A[1]), 'E19');
    createText(String(_4A[2]), 'F19');
    createText(String(_4A[0] + _4A[1] + _4A[2]), 'G19');

    let _4B = [
        countMatches(' 4B', '2*'),
        countMatches(' 4B', '3*'),
        countMatches(' 4B', '4*')
    ];
    createText(String(_4B[0]*2 + _4B[1]*3 + _4B[2]*4), 'B20');
    createText(String(_4B[0]), 'D20');
    createText(String(_4B[1]), 'E20');
    createText(String(_4B[2]), 'F20');
    createText(String(_4B[0] + _4B[1] + _4B[2]), 'G20');

    // Total
    let total1 = [
        P3A, P3B, KA, KB,
        _1A, _1B, _2A, _2B,
        P4A, P4B, _3A, _3B,
        _4A, _4B
    ].reduce(
        (sum, cls) => sum + cls[0]*2 + cls[1]*3 + cls[2]*4,
        0
    );

    createText(String(total1 + 10), "B27");

    let _5A = [
        countMatches('5A', '2*'),
        countMatches('5A', '3*'),
        countMatches('5A', '4*')
    ];
    createText(String(_5A[0]*2 + _5A[1]*3 + _5A[2]*4), 'B31');
    createText(String(_5A[0]), 'D31');
    createText(String(_5A[1]), 'E31');
    createText(String(_5A[2]), 'F31');
    createText(String(_5A[0] + _5A[1] + _5A[2]), 'G31');

    let _5B = [
        countMatches('5B', '2*'),
        countMatches('5B', '3*'),
        countMatches('5B', '4*')
    ];
    createText(String(_5B[0]*2 + _5B[1]*3 + _5B[2]*4), 'B32');
    createText(String(_5B[0]), 'D32');
    createText(String(_5B[1]), 'E32');
    createText(String(_5B[2]), 'F32');
    createText(String(_5B[0] + _5B[1] + _5B[2]), 'G32');

    let _6A = [
        countMatches('6A', '2*'),
        countMatches('6A', '3*'),
        countMatches('6A', '4*')
    ];
    createText(String(_6A[0]*2 + _6A[1]*3 + _6A[2]*4), 'B33');
    createText(String(_6A[0]), 'D33');
    createText(String(_6A[1]), 'E33');
    createText(String(_6A[2]), 'F33');
    createText(String(_6A[0] + _6A[1] + _6A[2]), 'G33');

    let _6B = [
        countMatches('6B', '2*'),
        countMatches('6B', '3*'),
        countMatches('6B', '4*')
    ];
    createText(String(_6B[0]*2 + _6B[1]*3 + _6B[2]*4), 'B34');
    createText(String(_6B[0]), 'D34');
    createText(String(_6B[1]), 'E34');
    createText(String(_6B[2]), 'F34');
    createText(String(_6B[0] + _6B[1] + _6B[2]), 'G34');

    let _7A = [
        countMatches('7A', '2*'),
        countMatches('7A', '3*'),
        countMatches('7A', '4*')
    ];
    createText(String(_7A[0]*2 + _7A[1]*3 + _7A[2]*4), 'B37');
    createText(String(_7A[0]), 'D37');
    createText(String(_7A[1]), 'E37');
    createText(String(_7A[2]), 'F37');
    createText(String(_7A[0] + _7A[1] + _7A[2]), 'G37');

    let _7B = [
        countMatches('7B', '2*'),
        countMatches('7B', '3*'),
        countMatches('7B', '4*')
    ];
    createText(String(_7B[0]*2 + _7B[1]*3 + _7B[2]*4), 'B38');
    createText(String(_7B[0]), 'D38');
    createText(String(_7B[1]), 'E38');
    createText(String(_7B[2]), 'F38');
    createText(String(_7B[0] + _7B[1] + _7B[2]), 'G38');

    let _8A = [
        countMatches('8A', '2*'),
        countMatches('8A', '3*'),
        countMatches('8A', '4*')
    ];
    createText(String(_8A[0]*2 + _8A[1]*3 + _8A[2]*4), 'B39');
    createText(String(_8A[0]), 'D39');
    createText(String(_8A[1]), 'E39');
    createText(String(_8A[2]), 'F39');
    createText(String(_8A[0] + _8A[1] + _8A[2]), 'G39');

    let _8B = [
        countMatches('8B', '2*'),
        countMatches('8B', '3*'),
        countMatches('8B', '4*')
    ];
    createText(String(_8B[0]*2 + _8B[1]*3 + _8B[2]*4), 'B40');
    createText(String(_8B[0]), 'D40');
    createText(String(_8B[1]), 'E40');
    createText(String(_8B[2]), 'F40');
    createText(String(_8B[0] + _8B[1] + _8B[2]), 'G40');

    // Total
    let total2 = [
        _5A, _5B, _6A, _6B,
        _7A, _7B, _8A, _8B
    ].reduce(
        (sum, cls) => sum + cls[0]*2 + cls[1]*3 + cls[2]*4,
        0
    );

    createText(String(total2 + 10), "B47");
}