import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../layout';
import { Text } from '../ui/atoms/text';
import ColorChips from '../ui/molecules/chip/Chip';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import QuiltedImageList from '../ui/molecules/gallery/Gallery';
import IconChips from '../ui/molecules/iconchip/Iconchip';
import ToggleSwitch from '../ui/molecules/toggleSwitch/ToggleSwitch';
import VerticalMenu from '../ui/molecules/verticalMenu/VerticalMenu';
import BasicButtons from '../ui/molecules/button';
import Savechip from '../ui/molecules/backsavechip/Savechip';
import QuantityInput from '../ui/molecules/setcount/Setcount';
import OutlinedCard from '../ui/molecules/card/Card';
import CustomMonthLayout from '../ui/molecules/calender/Calender';
import Footer from '../ui/molecules/footer/Footer';
import { Divider, Grid, Typography, Box } from '@mui/material';
import {  DirectionsCar, ConnectedTv, TravelExplore, AcUnit,Wifi, CoffeeMaker ,
  Accessibility, Deck, LocalFireDepartment as BBQGrill, 
  Bathtub, Waves, HotTub, FireExtinguisher
} from '@mui/icons-material';

const Home: NextPage = () => {
  const [weeklyCounter] = useState<{ title: string; value: number }[]>(() => [
    { title: 'Monday', value: 10 },
    { title: 'Tuesday', value: 10 },
    { title: 'Wednesday', value: 10 },
    { title: 'Thursday', value: 10 },
    { title: 'Friday', value: 10 },
    { title: 'Saturday', value: 10 },
    { title: 'Sunday', value: 0 }
  ]);
  const [offeredAmenities] = useState([{title:'Free parking on premises', icon: <DirectionsCar />},{title:'TV', icon: <ConnectedTv />},{title:'Dedicated workspace', icon: <TravelExplore />},{title:'Air Conditioning', icon: <AcUnit />},{title:'WIFI', icon: <Wifi />},{title:'Washing Machine', icon: <CoffeeMaker />}])
  const [standOutAmenities] = useState([{title:'Exercise equipment', icon: <Accessibility/>},{title:'Patio',icon: <Deck/>},{title:'BBQ Grill', icon:<BBQGrill />},{title:'Outdoor Shower',icon: <Bathtub/>},{title:'Pool',icon: <Waves />},{title:'Hot tub', icon: <HotTub />}, {title:'Patio', icon: <Deck />},{title:'Fire Fit', icon: <FireExtinguisher />}])
  
  const [gender] = useState([{ title: 'Male'}, { title: 'Female'}, { title: 'Both can stay'}]);
  const [places] = useState([{title: 'Hotel'}, {title:'Apartment'},{title:'House'}, {title:'Flat'}]);
  const [roomMatePlaces] = useState([{title: 'Entire House'}, {title:'Shared Room'},{title:'Single Room '}]);

  return (
    <Layout>
    {/* Hero Section */}
      <ColorChips />
      <Box mt={2}>
         <Text fontSize={1.7} as="h3">Cerulen Tower Tokyu Hotel</Text>
      </Box>
      <Text className="text-secondary" as="p">
        26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan
      </Text>
      <QuiltedImageList />

      <Box className="d-flex">
        <AddModeratorOutlinedIcon />
        <Box ml={1} className="col-md-6">
         <Text>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</Text>
        </Box>
      </Box>
      <Box className="mb-4">
        <Text fontSize={1.25} as="h3">Description</Text>
      </Box>
      <Text className="border rounded-3 p-4 mb-4" as="figcaption">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis, maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi asperiores animi debitis iusto.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nisi hic nobis, maiores harum eius reprehenderit commodi tempora officiis? Nemo blanditiis voluptate inventore soluta
        corporis possimus commodi asperiores animi debitis iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis, maiores
        harum eius reprehenderit commodi{' '}
      </Text>

      {/*  Amenities Section */}
      <Box className="row">
       <Box className="col-lg-7 col-md-6">
       <Text fontSize={1.25} as="h3">Offered Amenities</Text>
        <Text className="text-secondary mb-2" as="figcaption">
          Who can stay there ?
        </Text>
        <IconChips data={offeredAmenities} gap={3} />
        </Box>
      </Box>

      <Box className="row mb-5">
          <Box className="col-lg-6 col-md-6">
            <Text className="text-secondary py-2 mt-3" as="figcaption">
              Any standout amenities?
            </Text>
          <IconChips data={standOutAmenities} gap={2} />
          </Box>
      </Box>
      <Box className="row mb-5">
        <Box className="col-md-6 d-flex justify-content-between align-items-center">
          <Box className="row">
            <Text fontSize={1.25} as="h3">Which of these best describe your place?</Text>
            <IconChips data={places} />
          </Box>
        </Box>
        <Box className="col-md-6">
          <Box className="row">
            <Text fontSize={1.25} as="h3">What type of place will roommate have?</Text>
            <IconChips data={roomMatePlaces}  />
          </Box>
        </Box>
      </Box>
      {/* Places Section */}
      <Box className="row">
        <Box className="col-md-6 d-flex flex-column  justify-content-between">
          <Box className="row">
            <Text fontSize={1.25} as="h3">Who can stay in your place?</Text>
            <Text className="text-secondary p-2 mb-2" as="figcaption">
              Who can stay there?
            </Text>
            <IconChips data={gender} />
          </Box>
          <Text className="text-secondary p-2 mb-2" as="figcaption">
            Sharable Details
          </Text>
          <Box className="row">
            <Box className="col-md-4 d-flex align-items-center justify-content-start">
              <Text fontSize={0.9} className="d-flex justify-content-around  align-items-center  " as="h5">
                Guests
              </Text>
            </Box>
            <Box className="col-md-8 4 d-flex align-items-center justify-content-start">
              <QuantityInput value={5} />{' '}
            </Box>
          </Box>
          <Text className="text-secondary p-2 mb-2" as="figcaption">
            Sharable Details
          </Text>
          <Box className="row">
            <Box className="col-md-4 d-flex align-items-center justify-content-start">
              <Text fontSize={0.9} className="d-flex justify-content-around  align-items-center  " as="h5">
                Bedrooms
              </Text>
            </Box>
            <Box className="col-md-8 4 d-flex align-items-center justify-content-start">
              <QuantityInput value={5} />{' '}
            </Box>
          </Box>
          <Box className="row">
            <Box className="col-md-4 d-flex align-items-center justify-content-start">
              <Text fontSize={0.9} className="d-flex justify-content-around  align-items-center  " as="h5">
                Beds
              </Text>
            </Box>
            <Box className="col-md-8 4 d-flex align-items-center justify-content-start">
              <QuantityInput value={5} />{' '}
            </Box>
          </Box>
          <Box className="row">
            <Box className="col-md-4 d-flex align-items-center justify-content-start">
              <Text fontSize={0.9} className="d-flex justify-content-around  align-items-center  " as="h5">
                Bathrooms
              </Text>
            </Box>
            <Box className="col-md-8 4 d-flex align-items-center justify-left">
              <QuantityInput value={5} />{' '}
            </Box>
          </Box>
        </Box>

        <Box className="col-md-6">
          <Box className="row">
            <Text fontSize={1.25} as="h3">Set Your price</Text>
              <ToggleSwitch />
            <Text className="text-secondary p-2 mb-2" as="figcaption">
              Places like yours in your area usally range from $25 to $41
            </Text>
            <Grid>
              {weeklyCounter.map((item, index) => (
                <Box key={index} className="row mb-3">
                  <Box className="col-md-4 d-flex align-items-center justify-content-start">
                    <Text fontSize={0.9} className="d-flex justify-content-around align-items-center  " as="h5">
                      {item.title}
                    </Text>
                  </Box>
                  <Box className="col-md-8 4 d-flex align-items-center justify-content-start">
                    <QuantityInput value={item.value} />
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* calender */}
      <Box className="row mt-5">
          <Text as="h3">Set your price</Text>
      </Box>
      <Box className="row">
        <Box className="col-md-5">
          <Box className='row mt-3'>
          <Box className="border rounded-4 d-flex justify-content-between" overflow='clip'>
            <VerticalMenu />
            <CustomMonthLayout />
          </Box>
          </Box>
        </Box>
        <Box className="col-md-1">
          </Box>
         {/* Cleaning Fees */}
        <Box className="col-md-6">
          <Box className="row mt-3">
            <OutlinedCard />
          </Box>
        </Box>
      </Box>

      <Typography marginBottom={2} marginTop={2} variant='h5'> Where you'll be</Typography>
      <Box className="row">
        <Box className="col-12 rounded-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60289.2143560982!2d72.75585524863284!3d19.191887100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ebb971618f%3A0xac25e91e27dc2fc8!2sAmazon%20Store!5e0!3m2!1sen!2sin!4v1704319273681!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 20 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
      <Text className="p-2" as="figcaption">
        Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical
        monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailau, and cultural sites such as the Aquitaine Museum.
      </Text>
      <Box className="row mt-1">
      <BasicButtons title='Show more' />
      </Box>
    <Box className=" w-100 mt-3">
    <Divider />
    </Box>
      <Box className="py-4">
        <Savechip />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
