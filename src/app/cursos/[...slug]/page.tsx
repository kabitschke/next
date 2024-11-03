type Props = {
    params: {
        slug: string[]
    }
}

export default async function  CursosPage ({params}:Props) {
    console.log(params);


   
    return (
        <div>
            <h1>Cursos</h1>
            {params.slug.join('/')}
      
        </div>
    )
}