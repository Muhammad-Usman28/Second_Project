import React from 'react'
import FinalPart from '../Finalpart'

export default function Items() {
  return (
    <div>
        {/* First Row */}
      <div className='
      xl:w-full xl:h-[510px] xl:flex
      lg:w-[1240px] lg:h-[510px] lg:flex
      md:w-[768px] md:h-[510px] md:flex
      '>

        {/* First Box */}

        <div className='
        xl:w-[315px] xl:h-[440px] xl:ml-[1px] xl:mt-[114px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[1px] lg:mt-[114px] lg:border lg:border-black lg:border-solid
        md:w-[255px] md:h-[440px] md:ml-[1px] md:mt-[114px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[310px] xl:h-[60px]
            lg:w-[310px] lg:h-[60px]
            md:w-[255px] md:h-[60px]'>
                <h1 className='
                xl:font-sans xl:text-[16px] xl:text-[#1A1A1A] xl:font-bold xl:pt-8 xl:pl-8
                lg:font-sans lg:text-[16px] lg:text-[#1A1A1A] lg:font-bold lg:pt-8 lg:pl-8
                md:font-sans md:text-[16px] md:text-[#1A1A1A] md:font-bold md:pt-8 md:pl-8'>New In</h1>

                <p className='
                xl:text-[13px] xl:font-sans xl:pl-
                lg:text-[13px] lg:font-sans lg:pl-8
                md:text-[13px] md:font-sans md:pl-8'>Latest Items from CEIN</p>

                <button className='
                xl:w-[175px] xl:h-[56px] xl:border xl:border-[#1A1A1A] xl:border-solid xl:rounded-full xl:mt-[50px] xl:ml-[20px] xl:text-[#1A1A1A]
                lg:w-[175px] lg:h-[56px] lg:border lg:border-[#1A1A1A] lg:border-solid lg:rounded-full lg:mt-[50px] lg:ml-[20px] lg:text-[#1A1A1A]
                md:w-[175px] md:h-[56px] md:border md:border-[#1A1A1A] md:border-solid md:rounded-full md:mt-[50px] md:ml-[20px] md:text-[#1A1A1A]'>
                Shop All
            </button>
            </div>

        </div>

        {/* Second Box */}

        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[114px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[114px] lg:border lg:border-black lg:border-solid
        md:w-[255px] md:h-[440px] md:ml-[0px] md:mt-[114px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
                <img src="images/img22.png" alt=""  className='
                md:items-center'/>
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-[12px] font-sans'>TENT</h1>
                </div>
                <div>
                    <h1 className='text-[12px] font-sans' >$74.99</h1>
                </div>
            </div>

            <div className='
            xl:w-[280px] xl:h-[80px] xl:m-4 xl:mt-[-100px]
            lg:w-[280px] lg:h-[80px] lg:m-4 lg:mt-[-100px]
            md:w-[250px] md:h-[80px] md:m-4 md:mt-[-100px]'>
                <h1 className='text-[13px] font-sans'>Forceatt Camping Tent</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex justify-between'>

            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>

                <div className='w-[22px] h-[22px] border  rounded-full bg-[#E6C06E]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#3C5D48]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#553927]'></div>

            </div>       
        </div>

        {/* Third box */}
        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[114px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[114px] lg:border lg:border-black lg:border-solid
        md:w-[255px] md:h-[440px] md:ml-[0px] md:mt-[114px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
                <img src="images/img23.png" alt="" 
                className='items-center'/>
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-[12px] font-sans'>CHAIR</h1>
                </div>
                <div>
                    <h1 className='text-[12px] font-sans' >$82.99</h1>
                </div>
            </div>

            <div className='w-[220px] h-[80px] m-4 mt-[-100px]'>
                <h1 className='text-[13px] font-sans'>Guide Gear Padded Camping Chair</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex justify-between'>

            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>

                <div className='w-[22px] h-[22px] border  rounded-full bg-[#E6C06E]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#3C5D48]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#553927]'></div>

            </div>       
        </div>

        {/* Fourth Box */}
         <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[114px] xl:border xl:border-black xl:border-solid
        lg:w-[311px] lg:h-[440px] lg:ml-[-1px] lg:mt-[114px] lg:border lg:border-black lg:border-solid
        md:w-[255px] md:h-[440px] md:ml-[-765px] md:mt-[553px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>

                <img src="images/img24.png" alt="" 
                className='items-center'/>
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-[12px] font-sans'>CHAIR</h1>
                </div>
                <div>
                    <h1 className='text-[12px] font-sans' >$78.46</h1>
                </div>
            </div>

            <div className='w-[280px] h-[80px] m-4 mt-[-100px]'>
                <h1 className='text-[13px] font-sans'>Forceatt Camping Tent</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex justify-between'>

            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>

                <div className='w-[22px] h-[22px] border  rounded-full bg-[#E6C06E]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#3C5D48]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#553927]'></div>

            </div>       
        </div>

      </div>



        {/* Second Row */}
        
      <div className='
      xl:w-full xl:h-[510px] xl:flex
      lg:w-[1240px] lg:h-[510px] lg:flex
      md:w-[768px] md:h-[510px] md:flex'>

        {/* Fifth Box */}

        
        <div className='
        xl:w-[315px] xl:h-[440px] xl:ml-[1px] xl:mt-[43px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[1px] lg:mt-[43px] lg:border lg:border-black lg:border-solid
        md:w-[257px] md:h-[440px] md:ml-[255px] md:mt-[43px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>

                <img src="images/img25.png" alt="" 
                className='items-center'/>
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-[12px] font-sans'>SLEEPING</h1>
                </div>
                <div>
                    <h1 className='text-[12px] font-sans' >$19.99</h1>
                </div>
            </div>

            <div className='w-[280px] h-[80px] m-4 mt-[-100px]'>
                <h1 className='text-[13px] font-sans'>Cold Weather & Warm Sleeping Bags</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex justify-between'>

            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>

                <div className='w-[22px] h-[22px] border  rounded-full bg-[#576F93]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#FB5B36]'>
                </div>
                

            </div>       
        </div>

        {/* 6 Box */}

        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[43px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[43px] lg:border lg:border-black lg:border-solid
        md:w-[254px] md:h-[440px] md:ml-[0px] md:mt-[43px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
                <img src="images/img26.png" alt="" 
                className='items-center'/>
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-[12px] font-sans'>TENT</h1>
                </div>
                <div>
                    <h1 className='text-[12px] font-sans' >$199.99</h1>
                </div>
            </div>

            <div className='
            xl:w-[280px] xl:h-[80px] xl:m-4 xl:mt-[-100px]
            lg:w-[280px] lg:h-[80px] lg:m-4 lg:mt-[-100px]
            md:w-[220px] md:h-[80px] md:m-4 md:mt-[-100px]'>
                <h1 className='text-[13px] font-sans'>Lightweight Waterproof Camping Tent</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex justify-between'>

            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>

                <div className='w-[22px] h-[22px] border  rounded-full bg-[#E6C06E]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#3C5D48]'>
                </div>
                <div className='w-[22px] h-[22px] border  rounded-full bg-[#553927]'></div>

            </div>       
        </div>

        {/* 7 box */}
        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[43px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[43px] lg:border lg:border-black lg:border-solid
        md:w-[254px] md:h-[440px] md:ml-[-765px] md:mt-[483px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
                <img src="images/img27.png" alt=""
                className='items-center' />
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-[12px] font-sans'>KITCHEN</h1>
                </div>
                <div>
                    <h1 className='text-[12px] font-sans' >$27.95</h1>
                </div>
            </div>

            <div className='w-[280px] h-[80px] m-4 mt-[-100px]'>
                <h1 className='text-[13px] font-sans'>Folding Campfire Grill Grate</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex justify-between'>

            </div>       
        </div>

        {/* 8 Box */}
         <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[43px] xl:border xl:border-black xl:border-solid
        lg:w-[311px] lg:h-[440px] lg:ml-[-1px] lg:mt-[43px] lg:border lg:border-black lg:border-solid
        md:w-[258px] md:h-[440px] md:ml-[0px] md:mt-[483px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>

                <img src="images/img29.png" alt="" 
                className='items-center'/>
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
                <div>
                    <h1 className='text-[12px] font-sans'>KITCHEN</h1>
                </div>
                <div>
                    <h1 className='text-[12px] font-sans' >$54</h1>
                </div>
            </div>

            <div className='w-[280px] h-[80px] m-4 mt-[-100px]'>
                <h1 className='text-[13px] font-sans'>Insulated Portable Cooler</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex'>

            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center mr-[30px]'>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>

                <div className='w-[22px] h-[22px] border  rounded-full bg-[#3C5D48]'>
                </div>
                

            </div>       
        </div>

      </div>



         {/* Third Row */}
      <div className='
      xl:w-full xl:h-[510px] xl:flex
      lg:w-[1240px] lg:h-[510px] lg:flex
      md:w-[768px] md:h-[510px] md:flex'>

                {/* 9 Box */}

        <div className='
        xl:w-[315px] xl:h-[440px] xl:ml-[1px] xl:mt-[-27px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[1px] lg:mt-[-27px] lg:border lg:border-black lg:border-solid
        md:w-[254px] md:h-[440px] md:ml-[512px] md:mt-[-27px] md:border md:border-black md:border-solid'>

    <div className='
    xl:w-[310px] xl:h-[60px]
    lg:w-[310px] lg:h-[60px]
    md:w-[220px] md:h-[60px]'>
        <h1 className='font-sans text-[16px] text-[#1A1A1A] font-bold pt-8 pl-8'>Best Seller</h1>
        <p className='text-[13px] font-sans pl-8'>Gear up for great outdoorN</p>

        <button className='w-[175px] h-[56px] border border-[#1A1A1A] border-solid rounded-full mt-[50px]
        ml-[20px] text-[#1A1A1A]'>
        Shop All
    </button>
    </div>

        </div>

            {/* 10 Box */}

        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[-27px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[-27px] lg:border lg:border-black lg:border-solid
        md:w-[254px] md:h-[440px] md:ml-[-765px] md:mt-[413px] md:border md:border-black md:border-solid'>

    <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
        <img src="images/img30.png" alt="" 
        className='items-center'/>
    </div>

    <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
        <div>
            <h1 className='text-[12px] font-sans'>KITCHEN</h1>
        </div>
        <div>
            <h1 className='text-[12px] font-sans' >$33.59</h1>
        </div>
    </div>

    <div className='
    xl:w-[280px] xl:h-[80px] xl:m-4 xl:mt-[-100px]
    lg:w-[280px] lg:h-[80px] lg:m-4 lg:mt-[-100px]
    md:w-[230px] md:h-[80px] md:m-4 md:mt-[-100px]'>
        <h1 className='text-[13px] font-sans'>Folding Campfire Grill Grate with Grill Plate</h1>
    </div>
       
        </div>

        {/* 11 box */}
        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[-27px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[-27px] lg:border lg:border-black lg:border-solid
        md:w-[258px] md:h-[440px] md:ml-[0px] md:mt-[413px] md:border md:border-black md:border-solid'>

    <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
        <img src="images/img31.png" alt="" 
        className='items-center'/>
    </div>

    <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
        <div>
            <h1 className='text-[12px] font-sans'>TENT</h1>
        </div>
        <div>
            <h1 className='text-[12px] font-sans' >$162.29</h1>
        </div>
    </div>

    <div className='w-[280px] h-[80px] m-4 mt-[-100px]'>
        <h1 className='text-[13px] font-sans'>Weather Master Camping Tent</h1>
    </div>

    <div className='w-[155px] h-[22px] m-4 flex '>

    <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center mr-[30px]'>
    <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
    </div>

        <div className='w-[22px] h-[22px] border  rounded-full bg-[#576F93]'>
        </div>

    </div>       
        </div>

        {/* 12 Box */}
        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[-27px] xl:border xl:border-black xl:border-solid
        lg:w-[311px] lg:h-[440px] lg:ml-[-1px] lg:mt-[-27px] lg:border lg:border-black lg:border-solid
        md:w-[253px] md:h-[440px] md:ml-[0px] md:mt-[413px] md:border md:border-black md:border-solid'>

    <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
        <img src="images/img32.png" alt=""
        className='items-center' />
    </div>

    <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
        <div>
            <h1 className='text-[12px] font-sans'>CHAIR</h1>
        </div>
        <div>
            <h1 className='text-[12px] font-sans' >$78.46</h1>
        </div>
    </div>

    <div className='
    xl:w-[280px] xl:h-[80px] xl:m-4 xl:mt-[-100px]
    lg:w-[280px] lg:h-[80px] lg:m-4 lg:mt-[-100px]
    md:w-[220px] md:h-[80px] md:m-4 md:mt-[-100px]'>
        <h1 className='text-[13px] font-sans'>Forceatt Camping Tent</h1>
    </div>

    <div className='w-[155px] h-[22px] m-4 flex justify-between'>

    <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
    <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
    </div>

        <div className='w-[22px] h-[22px] border  rounded-full bg-[#E6C06E]'>
        </div>
        <div className='w-[22px] h-[22px] border  rounded-full bg-[#C2D1D8]'>
        </div>
        <div className='w-[22px] h-[22px] border  rounded-full bg-[#576F93]'></div>

    </div>       
       </div>

        </div>


        {/* Fourth Row */}
      <div className='
      xl:w-full xl:h-[510px] xl:flex
      lg:w-[1240px] lg:h-[510px] lg:flex
      md:w-[768px] md:h-[510px] md:flex '>

        {/* 13 Box */}

        <div className='
        xl:w-[315px] xl:h-[440px] xl:ml-[1px] xl:mt-[-97px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[1px] lg:mt-[-97px] lg:border lg:border-black lg:border-solid
        md:w-[254px] md:h-[440px] md:ml-[1px] md:mt-[342px] md:border md:border-black md:border-solid'>

            <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>

            <img src="images/img33.png" alt="" 
            className='items-center'/>
            </div>

            <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
            <div>
            <h1 className='text-[12px] font-sans'>BAG</h1>
            </div>
            <div>
            <h1 className='text-[12px] font-sans' >$39.59</h1>
            </div>
            </div>

            <div className='
            xl:w-[280px] xl:h-[80px] xl:m-4 xl:mt-[-100px]
            lg:w-[280px] lg:h-[80px] lg:m-4 lg:mt-[-100px]
            md:w-[250px] md:h-[80px] md:m-4 md:mt-[-100px]'>
            <h1 className='text-[12px] font-sans'>Folding Food Carrier Bag Portable Grocery Bag(48L)</h1>
            </div>

            <div className='w-[155px] h-[22px] m-4 flex justify-between'>

            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>

            <div className='w-[22px] h-[22px] border  rounded-full bg-[#E6C06E]'>
            </div>
            <div className='w-[22px] h-[22px] border  rounded-full bg-[#DCC5B7]'>
            </div>
            <div className='w-[22px] h-[22px] border  rounded-full bg-[#69675A]'></div>

            </div>

            </div>

        {/* 14 Box */}

        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[-97px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[-97px] lg:border lg:border-black lg:border-solid
        md:w-[258px] md:h-[440px] md:ml-[0px] md:mt-[342px] md:border md:border-black md:border-solid'>

        <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
        <img src="images/img34.png" alt=""
        className='items-center' />
        </div>

        <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
        <div>
        <h1 className='text-[12px] font-sans'>KITCHEN</h1>
        </div>
        <div>
        <h1 className='text-[12px] font-sans' >$19.59</h1>
        </div>
        </div>

        <div className='
        xl:w-[280px] xl:h-[80px] xl:m-4 xl:mt-[-100px]
        lg:w-[280px] lg:h-[80px] lg:m-4 lg:mt-[-100px]
        md:w-[240px] md:h-[80px] md:m-4 md:mt-[-100px]'>
        <h1 className='text-[12px] font-sans'>Lodge 10.25 Inch Cast Iron Pre-Seasoned Skillet</h1>
        </div>

        </div>

        {/* 15 box */}
        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[-97px] xl:border xl:border-black xl:border-solid
        lg:w-[310px] lg:h-[440px] lg:ml-[-1px] lg:mt-[-97px] lg:border lg:border-black lg:border-solid
        md:w-[253px] md:h-[440px] md:ml-[0px] md:mt-[342px] md:border md:border-black md:border-solid'>

        <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
        <img src="images/img35.png" alt=""  
        className='items-center'/>
        </div>

        <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
        <div>
        <h1 className='text-[12px] font-sans'>KITCHEN</h1>
        </div>
        <div>
        <h1 className='text-[12px] font-sans' >$207.29</h1>
        </div>
        </div>

        <div className='
        xl:w-[280px] xl:h-[80px] xl:m-4 xl:mt-[-100px]
        lg:w-[280px] lg:h-[80px] lg:m-4 lg:mt-[-100px]
        md:w-[230px] md:h-[80px] md:m-4 md:mt-[-100px]'>
        <h1 className='text-[12px] font-sans'>Outland Living Firebowl Mega Outdoor Propane Gas Fire Pit </h1>
        </div>
       
        </div>

        {/* 16 Box */}
        <div className='
        xl:w-[317px] xl:h-[440px] xl:ml-[0px] xl:mt-[-97px] xl:border xl:border-black xl:border-solid
        lg:w-[311px] lg:h-[440px] lg:ml-[-1px] lg:mt-[-97px] lg:border lg:border-black lg:border-solid
        md:w-[258px] md:h-[440px] md:ml-[-511px] md:mt-[782px] md:border md:border-black md:border-solid'>

        <div className='
            xl:w-[280px] xl:h-[250px] xl:m-4
            lg:w-[280px] lg:h-[250px] lg:m-4
            md:w-[220px] md:h-[250px] md:m-4'>
            <img src="images/img36.png" alt=""
            className='items-center' />
        </div>

        <div className='
            xl:w-[280px] xl:h-[110px] xl:m-4 xl:flex xl:justify-between
            lg:w-[280px] lg:h-[110px] lg:m-4 lg:flex lg:justify-between
            md:w-[220px] md:h-[110px] md:m-4 md:flex md:justify-between'>
            <div>
                <h1 className='text-[12px] font-sans'>KITCHEN</h1>
            </div>
            <div>
                <h1 className='text-[12px] font-sans'>$14.99</h1>
            </div>
        </div>

        <div className='w-[280px] h-[80px] m-4 mt-[-100px]'>
            <h1 className='text-[13px] font-sans'>Camping Coffee Mug</h1>
        </div>

        <div className='w-[155px] h-[22px] m-4 flex justify-between'>
            <div className='w-[26px] h-[26px] border border-black border-solid rounded-full flex items-center justify-center'>
                <div className='w-[22px] h-[22px] border rounded-full bg-[#1A1A1A]'></div>
            </div>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#E6C06E]'></div>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#C2D1D8]'></div>
            <div className='w-[22px] h-[22px] border rounded-full bg-[#576F93]'></div>
        </div>       
</div>


        </div>

        {/* Footer Component Call */}
        
        
        <FinalPart/>
    </div>
  )
}
