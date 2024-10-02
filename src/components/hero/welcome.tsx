export function Welcome(){
    return (
        <div className="flex flex-1 flex-col items-center justify-center md:rounded-md text-2xl md:text-6xl bg-slate-800 text-white">
            <span className="flex md:gap-4 gap-2">
                <h3>Olá</h3>
                <img className='w-10 md:w-16' src='/wavingemoji.svg' alt='waving hand emoji'></img>
                <h2>, eu sou um</h2>
            </span>
            <span className="md:mt-6 mt-2">desenvolvedor fullstack!</span>
        </div>
    )
}