import React from 'react';

export const Greet: React.FC = () => {
    return (
        <div>
            <form action="" className='flex flex-col gap-5'>
                <h1>こんにちは</h1>
                <div className='flex gap-3 items-center justify-start'>
                    <input id="fullname" type="radio" />
                    <label htmlFor="fullname">氏名</label>
                </div>
                <div className='flex flex-col gap-3'>
                    <input className='text-center' type="fullname" typeof='text' placeholder='氏名'/>
                    <button>ボタン1</button>
                    <button>ボタン2</button>
                </div>
            </form>
        </div>
    );
}
