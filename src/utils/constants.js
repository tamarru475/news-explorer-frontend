import dogImage from '../images/dog-photo.png';
import lakeImage from '../images/lake-photo.png';
import mooseImage from '../images/moose-photo.png';
import yellowstoneImage from '../images/yellowstone-photo.png';
import nightStarsImage from '../images/stars-photo.png';


const newsCardsArray = [
    {
        keyword: "Nature",
        image: dogImage,
        date: 'November 4, 2020',
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
        source: 'treehugger',
        _id: '1',
    },
    {
        keyword: "Nature",
        image: lakeImage,
        date: 'February 19, 2019',
        title: "Nature makes you better",
        text: `We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.`,
        source: 'national geographic',
        _id: '2',
    },
    {
        keyword: "Parks",
        image: mooseImage,
        date: 'October 19, 2020',
        title: "Nostalgic Photos of Tourists in U.S. National Parks",
        text: `“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...`,
        source: 'National parks traveler',
        _id: '3',
    },
    {
        keyword: "Yellowstone",
        image: yellowstoneImage,
        date: 'November 4, 2020',
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        text: `Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...`,
        source: 'national geographic',
        _id: '4',
    },
    {
        keyword: "Photography",
        image: nightStarsImage,
        date: 'March 16, 2020',
        title: "Scientists Don't Know Why Polaris Is So... ",
        text: `Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. `,
        source: 'treehugger',
        _id: '5',
    },

]

const submitErrorMessages = {
    signinValidationError: 'email or password are incorrect',
    signupConflictError: 'This email is not available',
    serverError: 'An error occured on the server'
}

export { newsCardsArray, submitErrorMessages };
