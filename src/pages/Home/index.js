
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../../components';

import logo from '../../images/scistone_logo.png'
import { faArrowRightArrowLeft, faArrowRotateRight, faArrowsLeftRightToLine, faArrowUpRightDots, faCloudArrowDown, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function Home() {


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.elements.email.value)
    }


    return (
        <Container >
            <Container className='home__summary__container' row>
                <Container className='home__summary-col' col >
                    <Container>
                        <img src={logo} alt='scistone-logo' />
                        <h1 >Stone Design</h1>
                        <p>Reusable & responsive React component library for <strong> high-level </strong> products.</p>
                    </Container>
                </Container>

            </Container>
            <Container className='stone__benefits__cards' >
                <h2>Benefits</h2>

                <Container row className='stone__benefits__card-row'>
                    <Container col8 >
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                        <h3>Reusable</h3>
                    </Container>
                    <Container col8 >

                        <FontAwesomeIcon icon={faArrowsLeftRightToLine} />
                        <h3>Responsive</h3>
                    </Container>
                    <Container col8 >

                        <FontAwesomeIcon icon={faCloudArrowDown} />
                        <h3>Easy Install</h3>
                    </Container>
                </Container>
                <Container id='benefits__row-last' row className='stone__benefits__card-row'>
                    <Container col8 >
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                        <h3>Dynamic</h3>
                    </Container>
                    <Container col8>

                        <FontAwesomeIcon icon={faArrowUpRightDots} />
                        <h3>Modern UI</h3>
                    </Container>
                    <Container col8>
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <h3>Open-Source</h3>
                    </Container>
                </Container>
            </Container>
            <Container row rowSize='lg' >

            </Container>
        </Container>
    );
}

export default Home;



// <Container style={{ marginBottom: '10px' }} rowSize='md' row>
// <Container col style={{ backgroundColor: '#FFBA00' }}>
//     Col
// </Container>
// </Container>
// <Container style={{ marginBottom: '10px' }} rowSize='md' row>
// <Container col12 style={{ backgroundColor: '#FFBA00' }}>
//     Col-12
// </Container>
// <Container col12 style={{ backgroundColor: '#a8dadc' }}>
//     Col-12
// </Container>
// </Container>
// <Container style={{ marginBottom: '10px' }} rowSize='md' row>
// <Container col8 style={{ backgroundColor: '#a8dadc' }}>
//     Col-8
// </Container>
// <Container col8 style={{ backgroundColor: '#FFBA00' }}>
//     Col-8
// </Container>
// <Container col8 style={{ backgroundColor: '#a8dadc' }}>
//     Col-8
// </Container>
// </Container>
// <Container style={{ marginBottom: '10px' }} rowSize='lg' row>
// <Container col6 style={{ backgroundColor: '#a8dadc' }}>
//     Col-6
// </Container>
// <Container col6 style={{ backgroundColor: '#FFBA00' }}>
//     Col-6
// </Container>
// <Container col6 style={{ backgroundColor: '#a8dadc' }}>
//     Col-6
// </Container>
// <Container col6 style={{ backgroundColor: '#FFBA00' }}>
//     Col-6
// </Container>
// </Container>
// <Container row>
// <Container col12>

// <Form
// onSubmit={onSubmit}
// >

// <Form.Item>
//     <Input name="email" type='email' placeholder='E-mail' label='E-mail' errorMessage='This field is required.' required />
// </Form.Item>
// <Form.Item>
//     <Input name="password" type='password' placeholder='Password' label='Password' errorMessage='This field is required.' required />
// </Form.Item>

// <Form.Item type='button'>
//     <Input name='remember' type='checkbox' label='Remember me' />
// </Form.Item>

// <Form.Item type='button'>
//     <Button type='primary'>
//         Sign in
//     </Button>
// </Form.Item>


// </Form>
// </Container>

// </Container>