export const HomeView = () => {
    return (

       <div className="container-md flex justify-center">
                <div className="w-1/2">
                    <article className="bg-stone-100 mt-10 rounded-md shadow overflow-hidden p-3">
                        <h1 className="text-center ">Diploma de Excelencia</h1>
                        <div className="h-60">
                            <img
                                className="rounded-md h-full w-full object-cover object-center"
                                src="./img/diploma.png" 
                                alt="Ambiente de desarrollo para aplicaciones IA"
                            />    
                        </div>    
                        <div className="space-y-3 p-5">
                            <h3 className="text-sm font-semibold text-blue-900">Diploma de Excelencia</h3>
                            <h2 className="text-xl font-semibold text-slate-800 leading-tight"></h2>
                            <p className="text-slate-500"></p>
                        </div>
                        <div className="flex space-x-2 p-4">
                            <div className="flex flex-col justify-center">
                                <span className="text-sm text-slate-700">Juan Pablo</span>
                                <span className="text-slate-600 text-sm">Mar 11, 2024</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
      
    )
  }
  