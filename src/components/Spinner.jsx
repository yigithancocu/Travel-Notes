function Spinner() {
  return (
    <div>
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid text-white border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}

export default Spinner;
