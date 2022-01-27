// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import kochi from './banks/kochi.json'
import bangalore from './banks/bangalore.json'
import mumbai from './banks/mumbai.json'
import delhi from './banks/delhi.json'
import CHENNAI from './banks/CHENNAI.json'

export default function handler(req, res) {
  if(req.query.city=="KOCHI"){
    res.status(200).json(kochi)
  }
  else if(req.query.city=="BANGALORE"){
    res.status(200).json(bangalore)
  }
  else if(req.query.city=="MUMBAI"){
    res.status(200).json(mumbai)
  }
  else if(req.query.city=="DELHI"){
    res.status(200).json(delhi)
  }
  else if(req.query.city=="CHENNAI"){
    res.status(200).json(CHENNAI)
  }
  else{
    res.status(404).json({ error: 'Invalide City' })
  }
}
