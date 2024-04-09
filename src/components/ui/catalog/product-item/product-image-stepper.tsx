import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MobileStepper from '@mui/material/MobileStepper'
import { FC, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

interface IProductImageStepper {
    images: string[]
}

const ProductImageStepper: FC<IProductImageStepper> = ({ images }) => {
    const [activeStep, setActiveStep] = useState(0)

    const maxSteps = images.length

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Box
                component='img'
                sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                    objectFit: 'fill',
                    objectPosition: 'center'
                }}
                src={images[activeStep]}
                alt={images[activeStep]}
            />
            {images.length !== 1 && (
                <MobileStepper
                    sx={{
                        backgroundColor: 'transparent',
                        marginTop: '-40px'
                    }}
                    steps={maxSteps}
                    position='static'
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size='small'
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            <AiOutlineRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            size='small'
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            <AiOutlineLeft />
                            Back
                        </Button>
                    }
                />
            )}
        </Box>
    )
}

export default ProductImageStepper
