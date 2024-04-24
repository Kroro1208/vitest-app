import { delay } from "./async_func";

it('delayが指定された時間後にメッセージを返す', async() => {
    const result = await delay('Hello Vites', 3000);
    expect(result).toBe('Hello Vites');
})

it('timeがマイナスの場合はエラーを返す', async() => {
    try {
        await delay('Hello Vites', -1);
    } catch (e: any) {
        expect(e.message).toBe('timeは0以上で設定してください');        
    }
})

// これでもOK
it('timeがマイナスの場合はエラーを返す2', async() => {
    await expect(delay('Hello Vites', -2)).rejects.toThrow('timeは0以上で設定してください');
})

