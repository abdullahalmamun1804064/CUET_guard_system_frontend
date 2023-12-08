export function formatDateTimeWithAMPM(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  return new Date(dateString).toLocaleString('en-US', options);
}

export function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };


  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', options);
  const month = formattedDate.split(' ')[0];
  const day = formattedDate.split(' ')[1];
  const year = formattedDate.split(' ')[2];

  return `${day} ${month} ${year}`;
}

export function convertDateFormat(dateString) {
  const dateParts = dateString?.split('-');
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const monthName = months[parseInt(month, 10) - 1];

  return `${day} ${monthName} ${year}`;
}