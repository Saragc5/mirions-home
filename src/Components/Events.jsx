
function Events({ title, description}) {
  return (
    <main>    
      <div className="w-80 max-h-4  border-solid border-2 border-indigo-600 rounded-xl overflow-hidden mb-4">      
        <h2 className="text-lg p-2">{title}</h2>
        <p className="w-full max-h-14 p-4">{description}</p>
      </div>
    </main>
  )
}

export default Events