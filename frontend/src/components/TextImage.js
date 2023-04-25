import './TextImage.css';

export default function TextImage({ text, image, subtitle }) {
    // const textImageComponents = content.map((content) => {
    //     return <TextImage 
    //     image={content.image} 
    //     subtitle={content.subtitle}
    //     text={content.text}/>
    // })

    return (
        <>
            <div className='text-image-container'>
                <img src={image} />
                <div className='subtitle-container'><h2>{subtitle}</h2></div>
                <div className='text-image-text-container'>
                    <p >{text}</p>
                </div>

            </div>

        </>
    )

}