import styles from './ImageUploader.module.scss'

export default function ImageUploader({ onImageChosen }: any) {
    const onChooseImage = (position: number) => {
        onImageChosen(position)
    }

    const tempImages = [
        'https://cdn.pixabay.com/photo/2023/02/03/04/50/colorful-7764125_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/02/03/05/00/colorful-7764148_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/02/03/05/01/swirls-7764151_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/02/03/04/48/colorful-7764120_1280.jpg',
        'https://cdn.pixabay.com/photo/2023/02/03/04/53/colorful-7764133_1280.jpg',
    ]

    const onFileChange = (e) => {
        /* Data object to be used somehow 
          (consider in conjunction with AWS and saving image string to server. 
          imageId may be needed to display image(s) on page) 
        */

        console.log('File change event: ')
        alert('Event')

        const data = {
            target: e?.target,
            imageId: e?.target?.id || undefined,
            imageValue: e?.target?.value || undefined,
        }

        console.log(e)
        console.log('Data: ')
        console.log(data)
    }

    return (
        <div className={styles.container}>
            {/* Image 1 */}
            <div className={styles.imageWrapper}>
                <label htmlFor="image1" className={styles.uploadButton}>
                    Choose Image
                </label>
                <input
                    type="file"
                    id="image1"
                    name="image1"
                    onChange={onFileChange}
                    hidden
                />
            </div>

            {/* Image 2 */}
            <div className={styles.imageWrapper}>
                <label htmlFor="image2" className={styles.uploadButton}>
                    Choose Image
                </label>
                <input
                    type="file"
                    id="image2"
                    name="image2"
                    onChange={onFileChange}
                    hidden
                />
            </div>

            {/* Image 3 */}
            <div className={styles.imageWrapper}>
                <label htmlFor="image3" className={styles.uploadButton}>
                    Choose Image
                </label>
                <input
                    type="file"
                    id="image3"
                    name="image3"
                    onChange={onFileChange}
                    hidden
                />
            </div>

            {/* Image 4 */}
            <div className={styles.imageWrapper}>
                <label htmlFor="image4" className={styles.uploadButton}>
                    Choose Image
                </label>
                <input
                    type="file"
                    id="image4"
                    name="image4"
                    onChange={onFileChange}
                    hidden
                />
            </div>

            {/* Image 5 */}
            <div className={styles.imageWrapper}>
                <label htmlFor="image5" className={styles.uploadButton}>
                    Choose Image
                </label>
                <input
                    type="file"
                    id="image5"
                    name="image5"
                    onChange={onFileChange}
                    hidden
                />
            </div>
        </div>
    )
}
