const CardSkeleton = () => {
    return (
        <div className="card bg-base-100 w-[403px] shadow-xl rounded-[33px] overflow-hidden">
            <figure>
                <div

                    className="h-[232px] w-full skeleton" />

            </figure>
            <div className="card-body px-  [38px] py-[28px]">
                <h2 className="card-title font-bold h-[52px] mb-[18px] skeleton"></h2>
                <table className='mb-[40px]'>
                    <tbody>
                        <tr >
                            <td>
                                <div className="w-10 h-10 skeleton rounded-full"></div>
                            </td>
                            <td className='h-[30px] w-[110px]  skeleton'></td>
                            <td>
                                <div className="w-10 h-10 skeleton rounded-full"></div></td>
                            <td className="h-[30px] w-[110px]  skeleton"></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="w-10 h-10 skeleton rounded-full"></div> </td>
                            <td className='h-[30px] w-[110px] skeleton'></td>
                            <td>
                                <div className="w-10 h-10 skeleton rounded-full"></div></td>
                            <td className='h-[30px] w-[110px] skeleton'></td>

                        </tr>
                    </tbody>
                </table>
                <div className="card-actions">
                    <button className="h-[50px] w-[140px] skeleton"></button>
                </div>
            </div>
        </div>
    );
}

export default CardSkeleton;
