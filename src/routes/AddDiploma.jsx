export const AddDiploma = () => {
    return (
        <>
            {/* Poner en orden la plantilla de los diplomas que se pueden crear */}
        <main className="p-4">
        <div className=" max-w-6xl mx-auto gap-4 grid md:grid-cols-3 md:gap-4">
            <article className="bg-white flex flex-col shadow rounded overflow-hidden">
                <div className="h-60">
                    <img 
                        className="h-full w-full object-cover object-center"
                        src="/img/background_d.png" 
                        alt="Ambiente de desarrollo para aplicaciones IA"/>
                </div>
                <div className="space-y-3 p-5 flex-1 ">
                    <h3 className="text-sm font-semibold text-blue-900">Laravel</h3>
                    <h2 className="text-xl font-semibold text-slate-800 leading-tight">Ambiente de desarrollo para aplicaciones IA</h2>
                    <p className="text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quas, vel quam ex magnam distinctio sunt ratione </p>
                </div>
            </article>
            <article className="bg-white flex flex-col shadow rounded overflow-hidden">
                <div className="h-60">
                    <img 
                        className="h-full w-full object-cover object-center"
                        src="/img/background_d.png" 
                        alt="Ambiente de desarrollo para aplicaciones IA"/>
                </div>
                <div className="space-y-3 p-5 flex-1 ">
                    <h3 className="text-sm font-semibold text-blue-900">Laravel</h3>
                    <h2 className="text-xl font-semibold text-slate-800 leading-tight">Ambiente de desarrollo para aplicaciones IA</h2>
                    <p className="text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quas, vel quam ex magnam distinctio sunt ratione </p>
                </div>
            </article>
            <article className="bg-white flex flex-col shadow rounded overflow-hidden">
                <div className="h-60">
                    <img 
                        className="h-full w-full object-cover object-center"
                        src="/img/background_d.png" 
                        alt="Ambiente de desarrollo para aplicaciones IA"/>
                </div>
                <div className="space-y-3 p-5 flex-1 ">
                    <h3 className="text-sm font-semibold text-blue-900">Laravel</h3>
                    <h2 className="text-xl font-semibold text-slate-800 leading-tight">Ambiente de desarrollo para aplicaciones IA</h2>
                    <p className="text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quas, vel quam ex magnam distinctio sunt ratione </p>
                </div>
            </article>
        </div>
    </main>
        </>
    )
}