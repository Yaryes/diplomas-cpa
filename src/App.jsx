export const App = () => {
    return (    
        <>
        <div className="container-md columns-2">
            
            <article class="bg-white shadow rounded overflow-hidden p-3">
                <h1 className="center">Diploma de Excelencia</h1>
                <div className="h-60">
                    <img
                        className="h-full w-full object-cover object-center"
                        src="./img/diploma.png" 
                        alt="Ambiente de desarrollo para aplicaciones IA"
                    />    
                </div>    
                <div className="space-y-3 p-5">
                    <h3 className="text-sm font-semibold text-blue-900">Laravel</h3>
                    <h2 className="text-xl font-semibold text-slate-800 leading-tight">Ambiente de desarrollo para aplicaciones IA</h2>
                    <p className="text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quas, vel quam ex magnam distinctio sunt ratione veniam maiores odit enim voluptatibus. Blanditiis voluptatibus aperiam accusantium dicta officiis minima labore.</p>
                </div>
                <div className="flex space-x-2 p-4">
                    <div className="flex flex-col justify-center">
                        <span className="text-sm text-slate-700">Carlos Contreras</span>
                        <span className="text-slate-600 text-sm">Mar 19, 2024</span>
                    </div>
                </div>
            </article>
        </div>
        </>
    )
  }