// Star component
const Star = ({ filled = true }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-400 fill-current" : "text-gray-600"}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Card components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border shadow-sm ${className}`}>{children}</div>
)

const CardContent = ({ children, className = "" }) => <div className={className}>{children}</div>

const testimonials = [
  {
    id: 1,
    name: "Annapurna Nayak",
    role: "Business Owner",
    company: "Pihu Makeup Studio & Salon",
    content: "Exceptional work quality and attention to detail. Delivered beyond expectations and on time.",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJhGmtkBAlXEGT9ZGXB7lS7bxHX5KM3Ym32RPKLYcmG3SEfWQ=w72-h72-p-rp-mo-ba2-br100",
  },
  {
    id: 2,
    name: "Subhadra Tripathy",
    role: "Business Owner",
    company: "Silisalon",
    content: "Himansu helped take my business online with Google setup and a great website",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW2jgFPu9JzylGCq_7GLRsOF2c-C0EJay-cp2V0k5L38K9fKH0=s80-p-k-rw-no",
  },
  {
    id: 3,
    name: "Shehenza Parween",
    role: "Business Owner",
    company: "Achievers Institute",
    content: "Excellent online built website and google my business setup very well",
    rating: 5,
    avatar: "https://www.achievers-institute.in/images/logo.png",
  },
  {
    id: 3,
    name: "Urbasi Naik",
    role: "Back Office Assistant",
    company: "Sahana Clothing Company PVT LTD",
    content: "Undoubtedly, Himansu is very energetic and performs exceptionally well in his field. His communication is clear, and his behavior is excellent. I highly recommend him",
    rating: 5,
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHetvFQptqBHg/profile-displayphoto-shrink_200_200/B56ZSZMiy.GoAY-/0/1737736993229?e=1756339200&v=beta&t=Olj93dZbUo_pSNQQ40h6nQH53br7oXPjnwFXkdgaiGk",
  },
   {
    id: 3,
    name: "Hameed Khan",
    role: "Web Developer",
    company: "Freelance Developer",
    content: "I've known Himanshu Naik for a while now, and I’ve always admired his dedication to web development. As a freelance developer, he’s not just technically sound but also truly passionate about building meaningful and user-friendly websites. He listens, understands the client’s needs, and delivers with great attention to detail. If you're looking for someone who’s reliable, creative, then you can go with him without a second thought",
    rating: 5,
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQELUjLeBAyMIw/profile-displayphoto-shrink_100_100/B4DZa8rKyFG0AU-/0/1746922156287?e=1756339200&v=beta&t=-SZMQoM2Bz5Fz0B8gMd337lhnFiQmJ0RS9ZIEPDA-j4",
  },
  {
    id: 3,
    name: "Prashant Kumar",
    role: "Frontend Developer",
    company: "Freelance Developer",
    content: `I had the chance to work with Himansu Naik, and he is a very skilled Full Stack Developer. He knows JavaScript, React, Node.js, MongoDB, and PostgreSQL very well. He always finds smart solutions to problems and delivers great work.
              Himansu is also a good communicator and works well in a team. He is eager to learn new things and always ready to help others. His passion for web development and startups is truly inspiring.
              I highly recommend Himansu for any job or project. He will be a great addition to any team`,
    rating: 5,
    avatar: "https://media.licdn.com/dms/image/v2/D4D35AQEDNzqFotB-Nw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1732381189489?e=1751709600&v=beta&t=RYqvrH8Bm6J5DbksnQ3DGCluLEdO8VrFQ7Gcv2jdjEY",
  },
  {
    id: 3,
    name: "Pritimaya Sahoo",
    role: "Mobile Developer",
    company: "Peer Recommendation",
    content: "Nice Freelancer 👍",
    rating: 5,
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHElFAz-NoWaQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1675245029560?e=1756339200&v=beta&t=d1hX_N4Xt-0uIGaBNfMAENWjnn1hXwNXvlK6CH3aYQs",
  },

]

// bg-gray-950

const Testimonials = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 rounded-xl relative">
      {/*<div className="text-center mb-8">*/}
        {/*<h2 className="text-3xl font-bold text-white mb-2">What My Clients Say</h2>*/}
        {/*<p className="text-gray-400">Trusted by amazing people and companies</p>*/}
    {/*Genuine feedback from those I've worked with and those who believe in my skills.*/}
      {/*</div>*/}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
          >
            <CardContent className="p-6">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < testimonial.rating} />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed text-sm">"{testimonial.content}"</blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0  rounded-xl pointer-events-none"></div>
      {/*bg-gradient-to-r from-blue-500/5 to-purple-500/5*/}
    </div>
  )
}

export default Testimonials
