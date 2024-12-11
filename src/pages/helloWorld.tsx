import { useAppSelector } from "@/store/hook"


const HelloWorldPage = () => {
    
    const mode = useAppSelector(state => state.mode)

    console.log(mode)
    
    return(
        <>
            hello world
        </>
    )
}

export default HelloWorldPage