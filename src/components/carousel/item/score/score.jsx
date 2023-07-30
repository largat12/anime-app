

export const Score = ({score}) => {

    let color = ''

    const funScore = (score) => {
        let dato = parseInt(score)
        if(dato >= 0 && dato <= 4.9){
            color = '#F31260'
            return 'I do not recommend it.'
        }
        else if(dato >= 5 && dato <= 6.9 ){
            color = '#F5A524'
            return 'You may have fun.'
        }
        else if(dato >= 7 ){
            color = '#17C964'
            return '“Great, this is one of the best anime.'
        }

    }
    
    const texto = funScore(score)

    return (
        <div className="rounded-full absolute  top-2 left-2 p-2 w-auto text-xs font-normal" style={{background:color}}>
           {texto}
        </div>
    )
}
