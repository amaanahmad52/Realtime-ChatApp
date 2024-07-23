import React from 'react'

const Gender = ({ gender, setGender }) => {
    return (
        <>
            <div className='flex'>
                <div className="form-control">
                    <label className='label gap-2 cursor-pointer'>
                        <span className='label-text'>M</span>
                        <input
                            type="radio"
                            className="radio border-slate-900"
                            name="gender"
                            value="M"
                            checked={gender === "M"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className='label gap-2 cursor-pointer'>
                        <span className='label-text'>F</span>
                        <input
                            type="radio"
                            className="radio border-slate-900"
                            name="gender"
                            value="F"
                            checked={gender === "F"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </label>
                </div>
            </div>
        </>
    )
}

export default Gender

























// import React from 'react'

// const Gender = () => {
//   return (
//     <>
//     <div className='flex'>
//     <div className="form-control">
//         <label className={'label gap-2 cursor-pointer'}>
//             <span className='label-text'>M</span>
//             <input type="radio"  className="radio border-slate-900" value={mgender} onChange={(e)=>setMgender(e.target.value)} />
//         </label>    
//     </div>
//     <div className="form-control">
//         <label className={'label gap-2 cursor-pointer'}>
//             <span className='label-text'>FeM</span>
//             <input type="radio"  className="radio border-slate-900" value={fgender} onChange={(e)=>setFgender(e.target.value)} />
//         </label>    
//     </div>
//     </div>
      
//     </>
//   )
// }

// export default Gender
