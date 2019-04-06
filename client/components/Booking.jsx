import React from 'react';
import { PriceRatingBanner } from './PriceRatingBanner.jsx';
import { DateRangePicker } from './DateRangePicker.jsx';
import { Calendar } from './Calendar.jsx';
import { Guests } from './Guests.jsx';

function Booking (props) {
  return (
    <div>
      <div className='bookingOuter'>
        <div className='bookingBorder'>
          <div className='bookingSpacer'>
            <div className='bookingContentArea'>
              <PriceRatingBanner />
              <form className='bookingForm'>
                <div className='bookingFormStandardFields'>
                  <div className='bookingFormFieldsTopMargin'>
                    <DateRangePicker
                      currentShow={props.currentShow}
                      showCal={props.showCal}
                      onShowOrHideCalClick={props.onShowOrHideCalClick}
                      buildCalendarRowForSelectedMonth={props.buildCalendarRowForSelectedMonth}
                      determineStructureOfCalendarForSelectedMonth={props.determineStructureOfCalendarForSelectedMonth}
                      onCalendarChangeClick={props.onCalendarChangeClick}
                      calendar={props.calendar}
                      selectDates={props.selectDates}
                    />
                  </div>
                  <div className='bookingFormFieldGuestMargin'>
                    <Guests
                      onGuestCountChangeClick={props.onGuestCountChangeClick}
                      onGuestMenuExpandClick={props.onGuestMenuExpandClick}
                      guests={props.guests}
                    />
                  </div>
                </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
      <div>
        {/* <Calendar buildCalendarRowForSelectedMonth={props.buildCalendarRowForSelectedMonth} determineStructureOfCalendarForSelectedMonth={props.determineStructureOfCalendarForSelectedMonth} onCalendarChangeClick={props.onCalendarChangeClick} calendar={props.calendar} selectDates={props.selectDates} /> */}
      </div>
    </div>
  )
}

export {
  Booking
}
