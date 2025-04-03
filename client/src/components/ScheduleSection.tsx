import { Button } from "@/components/ui/button";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-vintage-paper bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Class Schedule</h2>
          <div className="section-divider"></div>
          <p className="text-dark text-lg">
            Find the perfect time to join our classes and start your journey to strength and wellness.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-90 border border-secondary rounded-lg overflow-hidden shadow-lg p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-dark">
              <thead>
                <tr className="border-b-2 border-secondary">
                  <th className="py-3 text-left font-heading font-bold">Time</th>
                  <th className="py-3 text-center font-heading font-bold">Monday</th>
                  <th className="py-3 text-center font-heading font-bold">Tuesday</th>
                  <th className="py-3 text-center font-heading font-bold">Wednesday</th>
                  <th className="py-3 text-center font-heading font-bold">Thursday</th>
                  <th className="py-3 text-center font-heading font-bold">Friday</th>
                  <th className="py-3 text-center font-heading font-bold">Saturday</th>
                </tr>
              </thead>
              <tbody>
                {/* Morning Classes */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-bold">6:00 AM</td>
                  <td className="py-4 text-center">Strength Basics</td>
                  <td className="py-4 text-center">HIIT</td>
                  <td className="py-4 text-center">Strength Basics</td>
                  <td className="py-4 text-center">HIIT</td>
                  <td className="py-4 text-center">Strength Basics</td>
                  <td className="py-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-bold">8:00 AM</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">Senior Fitness</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">Senior Fitness</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">Weekend Warrior</td>
                </tr>
                {/* Midday Classes */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-bold">12:00 PM</td>
                  <td className="py-4 text-center">Lunch Express</td>
                  <td className="py-4 text-center">Lunch Express</td>
                  <td className="py-4 text-center">Lunch Express</td>
                  <td className="py-4 text-center">Lunch Express</td>
                  <td className="py-4 text-center">Lunch Express</td>
                  <td className="py-4 text-center">-</td>
                </tr>
                {/* Evening Classes */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-bold">5:30 PM</td>
                  <td className="py-4 text-center">Total Body</td>
                  <td className="py-4 text-center">Boxing</td>
                  <td className="py-4 text-center">Total Body</td>
                  <td className="py-4 text-center">Boxing</td>
                  <td className="py-4 text-center">Total Body</td>
                  <td className="py-4 text-center">-</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold">7:00 PM</td>
                  <td className="py-4 text-center">Power Hour</td>
                  <td className="py-4 text-center">Mobility & Recovery</td>
                  <td className="py-4 text-center">Power Hour</td>
                  <td className="py-4 text-center">Mobility & Recovery</td>
                  <td className="py-4 text-center">-</td>
                  <td className="py-4 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <a href="#contact">
              <Button className="vintage-button bg-primary hover:bg-primary-dark text-light font-display tracking-wider px-6 py-2 rounded shadow transition duration-300">
                BOOK A CLASS
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
