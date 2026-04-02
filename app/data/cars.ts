export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  km: number;
  type: string;
  location: string;
  image: string;
  status: 'Mới' | 'Đã sử dụng';
}

export const CARS = [
  { id: '4', name: 'Ford Ranger Wildtrak', brand: 'Ford', price: 965000000, year: 2023, km: 0, type: 'Pickup', location: 'Bình Dương', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800', status: 'Mới' },
  { id: '5', name: 'Mazda CX-5 Premium', brand: 'Mazda', price: 829000000, year: 2022, km: 12000, type: 'SUV', location: 'Đà Nẵng', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800', status: 'Đã sử dụng' },
  { id: '6', name: 'VinFast VF8 Plus', brand: 'VinFast', price: 1270000000, year: 2023, km: 2000, type: 'Xe điện', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800', status: 'Mới' },
  { id: '7', name: 'Mitsubishi Xpander', brand: 'Mitsubishi', price: 658000000, year: 2023, km: 0, type: 'MPV', location: 'Long An', image: 'https://drive.gianhangvn.com/image/pre26-2881628j31500.jpg', status: 'Mới' },
  { id: '8', name: 'BMW 330i M Sport', brand: 'BMW', price: 1850000000, year: 2021, km: 28000, type: 'Sedan', location: 'TP. HCM', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800', status: 'Đã sử dụng' },
  { id: '9', name: 'Kia Carnival Royal', brand: 'Kia', price: 2450000000, year: 2024, km: 0, type: 'MPV', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800', status: 'Mới' },
  { id: '10', name: 'Porsche Taycan 4S', brand: 'Porsche', price: 5800000000, year: 2022, km: 8000, type: 'Xe điện', location: 'TP. HCM', image: 'https://a.storyblok.com/f/322327/2586x1449/7569dfbed6/taycan-4s.jpg/m/865x486/smart/filters:format(webp)?dpl=dpl_2vaEL1EGxMUkVrCN2Vnus9uZqidn', status: 'Đã sử dụng' },
  { id: '11', name: 'Hyundai Tucson Turbo', brand: 'Hyundai', price: 920000000, year: 2023, km: 4500, type: 'SUV', location: 'Cần Thơ', image: 'https://kenhxehyundai.vn/wp-content/uploads/0202/05/tucson-turbo-2024-16.jpg', status: 'Đã sử dụng' },
  { id: '12', name: 'Lexus RX350 Luxury', brand: 'Lexus', price: 4280000000, year: 2023, km: 0, type: 'SUV', location: 'Hải Phòng', image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=800', status: 'Mới' },
  { id: '13', name: 'Suzuki XL7 GLX', brand: 'Suzuki', price: 599000000, year: 2023, km: 100, type: 'SUV', location: 'Đồng Nai', image: 'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/standard/suzuki-xl7-hybrid-66dff776a5b4b.jpg', status: 'Mới' },
  { id: '14', name: 'Audi Q7 Quattro', brand: 'Audi', price: 3450000000, year: 2020, km: 45000, type: 'SUV', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800', status: 'Đã sử dụng' },
  { id: '15', name: 'Tesla Model 3 Performance', brand: 'Tesla', price: 2100000000, year: 2021, km: 15000, type: 'Xe điện', location: 'Đà Nẵng', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800', status: 'Đã sử dụng' },
  { id: '16', name: 'Subaru Forester i-L', brand: 'Subaru', price: 969000000, year: 2023, km: 0, type: 'SUV', location: 'Vũng Tàu', image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=800', status: 'Mới' },
  { id: '17', name: 'Mercedes-Benz S450', brand: 'Mercedes', price: 5190000000, year: 2023, km: 500, type: 'Sedan', location: 'TP. HCM', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800', status: 'Mới' },
  { id: '18', name: 'Land Rover Defender 110', brand: 'Land Rover', price: 4500000000, year: 2022, km: 11000, type: 'SUV', location: 'Hà Nội', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPwelLUriXg9qcbuiVB8o0r6gxCANe9Ke7g&s', status: 'Mới' },
  { id: '19', name: 'Mercedes-Benz S450 Luxury', brand: 'Mercedes-Benz', price: 5550000000, year: 2023, km: 0, type: 'Sedan', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800', status: 'Mới' },
  { id: '20', name: 'BMW X5 xDrive40i', brand: 'BMW', price: 4019000000, year: 2022, km: 12000, type: 'SUV', location: 'TP. HCM', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800', status: 'Đã sử dụng' },
  { id: '21', name: 'VinFast VF9 Plus', brand: 'VinFast', price: 1570000000, year: 2023, km: 2000, type: 'SUV', location: 'Đà Nẵng', image: 'https://drive.gianhangvn.com/image/290msxl-2608369j33309.jpg', status: 'Đã sử dụng' },
  { id: '22', name: 'Porsche 911 Carrera', brand: 'Porsche', price: 8200000000, year: 2021, km: 8000, type: 'Coupe', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800', status: 'Đã sử dụng' },
  { id: '23', name: 'Ford Ranger Raptor', brand: 'Ford', price: 1299000000, year: 2023, km: 0, type: 'Pickup', location: 'Bình Dương', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800', status: 'Mới' },
  { id: '24', name: 'Tesla Model 3', brand: 'Tesla', price: 1850000000, year: 2022, km: 5000, type: 'Sedan', location: 'TP. HCM', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800', status: 'Đã sử dụng' },
  { id: '25', name: 'Toyota Corolla Cross', brand: 'Toyota', price: 860000000, year: 2022, km: 20000, type: 'SUV', location: 'Cần Thơ', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800', status: 'Đã sử dụng' },
  { id: '26', name: 'Lexus RX350', brand: 'Lexus', price: 4129000000, year: 2023, km: 0, type: 'SUV', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=800', status: 'Mới' },
  { id: '27', name: 'Audi Q7 55 TFSI', brand: 'Audi', price: 3500000000, year: 2020, km: 35000, type: 'SUV', location: 'TP. HCM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkK7dTzZFH1daE_Hg1uFUNTtbNDjKqS1Ek-g&s', status: 'Đã sử dụng' },
  { id: '28', name: 'Kia Carnival Royal', brand: 'Kia', price: 2499000000, year: 2023, km: 1000, type: 'MPV', location: 'Hải Phòng', image: 'https://vcdn1-vnexpress.vnecdn.net/2022/05/10/Carnival-Royal-7300-1652168574.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=EKeWYcuzWDJjcz6wlBvD3w', status: 'Mới' },
  { id: '30', name: 'Honda Civic RS', brand: 'Honda', price: 870000000, year: 2022, km: 12000, type: 'Sedan', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800', status: 'Đã sử dụng' },
  { id: '32', name: 'Volvo XC90 Recharge', brand: 'Volvo', price: 4650000000, year: 2023, km: 500, type: 'SUV', location: 'Hà Nội', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QDWmjkl58ameRiWkPxQUUcA--8GHJ3aaqw&s', status: 'Đã sử dụng' },
  { id: '33', name: 'Volkswagen Teramont', brand: 'Volkswagen', price: 2499000000, year: 2022, km: 15000, type: 'SUV', location: 'Hồ Chí Minh', image: 'https://img1.oto.com.vn/2024/01/18/teramont-dai-dien-sua-7bd5-afc0_wm.webp', status: 'Đã sử dụng' },
  { id: '34', name: 'Subaru Forester', brand: 'Subaru', price: 969000000, year: 2023, km: 0, type: 'SUV', location: 'TP. HCM', image: 'https://www.usnews.com/object/image/00000199-c670-dd6f-a1bf-feff0caa0000/2026-subaru-forester-wilderness-blue-front-angle-view.jpg?update-time=1759970855717&size=responsiveGallery&format=webp', status: 'Mới' },
  { id: '35', name: 'Peugeot 5008', brand: 'Peugeot', price: 1199000000, year: 2022, km: 18000, type: 'SUV', location: 'Đà Nẵng', image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=800', status: 'Đã sử dụng' },
  { id: '3', name: 'Mini Cooper S', brand: 'Mini', price: 2399000000, year: 2023, km: 0, type: 'Hatchback', location: 'Hà Nội', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNhR-vat_5AAD5gUIhMCA1WAJJGzXvpRAWw&s', status: 'Mới' },
  { id: '2', name: 'Jeep Wrangler', brand: 'Jeep', price: 3700000000, year: 2021, km: 25000, type: 'SUV', location: 'TP. HCM', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800', status: 'Đã sử dụng' },
  { id: '1', name: 'Range Rover Autobiography', brand: 'Land Rover', price: 11500000000, year: 2023, km: 0, type: 'SUV', location: 'Hà Nội', image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=800', status: 'Mới' },
];