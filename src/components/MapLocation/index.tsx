function MapLocation() {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6887.991853971876!2d-86.14936462063226!3d30.32263368907254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8893e4e34d131d19%3A0x1b3d5a5e81bb9d58!2sSeaside%2C%20Florida%2032459%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1727800094118!5m2!1ses-419!2spe"
        width="100%"
        height="400"
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false">
      </iframe>
    </div>
  )
}
export default MapLocation;