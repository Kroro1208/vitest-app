// toBe test

it('数字テスト', () => {
    expect(2 + 2).toBe(4);
});

it('2+2は5ではない', () => {
    expect(2 + 2).not.toBe(5);
});

it('文字列テスト', () => {
    expect('Jest').toBe('Jest');
});

it('Boolen', () => {
    expect(true).toBe(true);
});

// toEqual test
it('配列テスト', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4];
    expect(arr1).toEqual(arr2);
});

it('オブジェクトテスト', () => {
    const obj1 = {
        a:1,
        b:2,
    };
    const obj2 = {
        a:1,
        b:2,
    };
    expect(obj1).toEqual(obj2);
});